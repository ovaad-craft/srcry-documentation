import { Injectable } from '@angular/core';
import { EdgeChaseData, EdgeChaseSettings, SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseControllerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<SrcryPropReadings> = new BehaviorSubject<SrcryPropReadings>({
    activePropW: '--',
    activePropH: '--',
    width: 0,
    height: 0
  });

  public Readings$ = this.Readings.asObservable();

  public DefaultSettings: EdgeChaseData = {
    edgeChaseW: {
      size: 'tiny',
      scale: '2',
      speed: '8'
    },
    edgeChaseWNudgeChunk: 0,
    edgeChaseWNudgeSlice: 0,
    edgeChaseH: {
      size: 'tiny',
      scale: '2',
      speed: '8'
    },
    edgeChaseHNudgeChunk: 0,
    edgeChaseHNudgeSlice: 0,
    chaseStopW: {
      size: 'hiMed',
      scale: '1',
      speed: '6'
    },
    chaseStopWNudgeChunk: 0,
    chaseStopWNudgeSlice: 0,
    chaseStopH: {
      size: 'loMed',
      scale: '2',
      speed: '4'
    },
    chaseStopHNudgeChunk: 0,
    chaseStopHNudgeSlice: 0
  }

  constructor() { }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      if(event.data.target === this.ChannelName){
        if(event.data.notification === 'loadComplete'){
          this.sendData({
            edgeChaseW: createCssVariable(createBoxSize(
              this.DefaultSettings.edgeChaseW.size,
              this.DefaultSettings.edgeChaseW.scale,
              this.DefaultSettings.edgeChaseW.speed
            )),
            edgeChaseWNudgeChunk: this.DefaultSettings.edgeChaseWNudgeChunk,
            edgeChaseWNudgeSlice: this.DefaultSettings.edgeChaseWNudgeSlice,
            edgeChaseH: createCssVariable(createBoxSize(
              this.DefaultSettings.edgeChaseH.size,
              this.DefaultSettings.edgeChaseH.scale,
              this.DefaultSettings.edgeChaseH.speed
            )),
            edgeChaseHNudgeChunk: this.DefaultSettings.edgeChaseHNudgeChunk,
            edgeChaseHNudgeSlice: this.DefaultSettings.edgeChaseHNudgeSlice,
            chaseStopW: createCssVariable(createBoxSize(
              this.DefaultSettings.chaseStopW.size,
              this.DefaultSettings.chaseStopW.scale,
              this.DefaultSettings.chaseStopW.speed
            )),
            chaseStopWNudgeChunk: this.DefaultSettings.chaseStopWNudgeChunk,
            chaseStopWNudgeSlice: this.DefaultSettings.chaseStopWNudgeSlice,
            chaseStopH: createCssVariable(createBoxSize(
              this.DefaultSettings.chaseStopH.size,
              this.DefaultSettings.chaseStopH.scale,
              this.DefaultSettings.chaseStopH.speed
            )),
            chaseStopHNudgeChunk: this.DefaultSettings.chaseStopHNudgeChunk,
            chaseStopHNudgeSlice: this.DefaultSettings.chaseStopHNudgeSlice,
          });
        }
        if(event.data.notification === 'data'){
          this.Readings.next(event.data.payload);
        }
      }
    };
  }

  public createBroadcastChannel(broadcastName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.createChannelListener();
  }

  public sendData(data: EdgeChaseSettings): void{
    this.DataChannel.postMessage({
      target: this.TargetName,
      payload: data
    });
  }

  public getDefaultSettings():EdgeChaseData{
    return this.DefaultSettings;
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
