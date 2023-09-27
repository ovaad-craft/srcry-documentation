import { Injectable } from '@angular/core';
import { EdgeChaseData, SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

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
        if(event.data.notification === 'loadComplete'){}
        if(event.data.notification === 'data'){}
      }
    };
  }

  public createBroadcastChannel(broadcastName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
  }
}
