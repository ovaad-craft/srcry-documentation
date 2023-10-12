import { Injectable } from '@angular/core';
import { SquishGrowthAnalyzerReadings, SquishGrowthData, SquishGrowthProps, SquishGrowthSettings } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthAnalyzerControllerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<SquishGrowthAnalyzerReadings> = new BehaviorSubject<SquishGrowthAnalyzerReadings>({
    baseSizeW: 0,
    growthSizeW: 0,
    fullSizeW: 0,
    baseSizeH: 0,
    growthSizeH: 0,
    fullSizeH: 0
  });

  public Readings$ = this.Readings.asObservable();

  public DefaultSettings: SquishGrowthData = {
    squishGrowthWStart: 1,
    squishGrowthWSpeed: 0,
    squishGrowthWMax: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    squishGrowthWMaxNudgeScale: 0,
    squishGrowthWMaxNudgeSlice: 0,
    squishGrowthHStart: 1,
    squishGrowthHSpeed: 0,
    squishGrowthHMax: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    squishGrowthHMaxNudgeScale: 0,
    squishGrowthHMaxNudgeSlice: 0
  };

  constructor() { }

  public createChannel(dataChannelName: string, channelName: string, targetName: string):void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.createChannelListener();
  }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      if(event.data.target === this.ChannelName){
        if(event.data.notification === 'loadComplete'){
          this.sendData({
            ...this.DefaultSettings,
            squishGrowthWStart: `${this.DefaultSettings.squishGrowthWStart}px`,
            squishGrowthHStart: `${this.DefaultSettings.squishGrowthHStart}px`,
            squishGrowthWMax: createBoxSize(
              this.DefaultSettings.squishGrowthWMax.size,
              this.DefaultSettings.squishGrowthWMax.scale,
              this.DefaultSettings.squishGrowthWMax.speed
            ),
            squishGrowthHMax: createBoxSize(
              this.DefaultSettings.squishGrowthHMax.size,
              this.DefaultSettings.squishGrowthHMax.scale,
              this.DefaultSettings.squishGrowthHMax.speed
            )
          });
        }
        if(event.data.notification === 'data'){
          this.updateReadings(event.data.payload);
        }
      };
    };
  }

  private updateReadings(data:SquishGrowthAnalyzerReadings):void{
    this.Readings.next(data);
  }

  public sendData(data: SquishGrowthProps):void{
    this.DataChannel.postMessage({
      target: this.TargetName,
      payload: {
        ...data,
        squishGrowthWMax: createCssVariable(data.squishGrowthWMax),
        squishGrowthHMax: createCssVariable(data.squishGrowthHMax)
      }
    });
  }

  public getDefaults():SquishGrowthData{
    return this.DefaultSettings;
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
