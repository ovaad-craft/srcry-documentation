import { Injectable } from '@angular/core';
import {StretchShrinkData, StretchShrinkProps, StretchShrinkReadings} from '@site-types';
import {BehaviorSubject} from 'rxjs';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkControllerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<StretchShrinkReadings> = new BehaviorSubject<StretchShrinkReadings>({
    width: 0,
    shrinkAmountW: 0,
    height: 0,
    shrinkAmountH: 0
  });

  public Readings$ = this.Readings.asObservable();

  public DefaultSettings: StretchShrinkData = {
    stretchShrinkWStart: 1,
    stretchShrinkWSpeed: 0,
    stretchShrinkWMin: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    stretchShrinkWMinNudgeChunk: 0,
    stretchShrinkWMinNudgeSlice: 0,
    stretchShrinkHStart: 1,
    stretchShrinkHSpeed: 0,
    stretchShrinkHMin: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    stretchShrinkHMinNudgeChunk: 0,
    stretchShrinkHMinNudgeSlice: 0
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
            stretchShrinkWStart: `${this.DefaultSettings.stretchShrinkWStart}px`,
            stretchShrinkHStart: `${this.DefaultSettings.stretchShrinkHStart}px`,
            stretchShrinkWMin: createBoxSize(
              this.DefaultSettings.stretchShrinkWMin.size,
              this.DefaultSettings.stretchShrinkWMin.scale,
              this.DefaultSettings.stretchShrinkWMin.speed
            ),
            stretchShrinkHMin: createBoxSize(
              this.DefaultSettings.stretchShrinkHMin.size,
              this.DefaultSettings.stretchShrinkHMin.scale,
              this.DefaultSettings.stretchShrinkHMin.speed
            )
          });
        }
        if(event.data.notification === 'data'){
          this.updateReadings(event.data.payload);
        }
      };
    };
  }

  private updateReadings(data:StretchShrinkReadings):void{
    this.Readings.next(data);
  }

  public sendData(data: StretchShrinkProps):void{
    this.DataChannel.postMessage({
      target: this.TargetName,
      payload: {
        ...data,
        stretchShrinkWMin: createCssVariable(data.stretchShrinkWMin),
        stretchShrinkHMin: createCssVariable(data.stretchShrinkHMin)
      }
    });
  }

  public getDefaults():StretchShrinkData{
    return this.DefaultSettings;
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
