import { Injectable, NgZone } from '@angular/core';
import { SquishGrowthAnalyzerReadings, SquishGrowthData, SquishGrowthSettings } from '@site-types';
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
    squishGrowthWStart: '1px',
    squishGrowthWSpeed: 0,
    squishGrowthWMax: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    squishGrowthWMaxNudgeScale: 0,
    squishGrowthWMaxNudgeSlice: 0,
    squishGrowthHStart: '1px',
    squishGrowthHSpeed: 0,
    squishGrowthHMax: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    squishGrowthHMaxNudgeScale: 0,
    squishGrowthHMaxNudgeSlice: 0
  };

  constructor(private zone: NgZone) { }

  public createChannel(dataChannelName: string, channelName: string, targetName: string):void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.createChannelListener();
  }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          if(event.data.notification === 'loadComplete'){
            this.sendData(this.DefaultSettings);
          }
          if(event.data.notification === 'data'){
            this.updateReadings(event.data.payload);
          }
        }
      });
    };
  }

  private updateReadings(data:SquishGrowthAnalyzerReadings):void{
    this.Readings.next(data);
  }

  public sendData(data: SquishGrowthData):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        payload: {
          squishGrowthWStart: data.squishGrowthWStart,
          squishGrowthWSpeed: data.squishGrowthWStart,
          squishGrowthWMax: createCssVariable(createBoxSize(
            data.squishGrowthWMax.size,
            data.squishGrowthWMax.scale,
            data.squishGrowthWMax.speed
          )),
          squishGrowthWMaxNudgeScale: data.squishGrowthWMaxNudgeScale,
          squishGrowthWMaxNudgeSlice: data.squishGrowthWMaxNudgeSlice,
          squishGrowthHStart: data.squishGrowthHStart,
          squishGrowthHSpeed: data.squishGrowthHStart,
          squishGrowthHMax: createCssVariable(createBoxSize(
            data.squishGrowthHMax.size,
            data.squishGrowthHMax.scale,
            data.squishGrowthHMax.speed
          )),
          squishGrowthHMaxNudgeScale: data.squishGrowthHMaxNudgeScale,
          squishGrowthHMaxNudgeSlice: data.squishGrowthHMaxNudgeSlice,
        }
      });
    });
  }

  public getDefaults():SquishGrowthData{
    return this.DefaultSettings;
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
