import { Injectable, NgZone } from '@angular/core';
import { StretchShrinkReadings, StretchShrinkSettings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkAnalyzerService {

  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  private Settings: BehaviorSubject<StretchShrinkSettings> = new BehaviorSubject<StretchShrinkSettings>({
    stretchShrinkWStart: '1px',
    stretchShrinkWSpeed: 0,
    stretchShrinkWMin: '--',
    stretchShrinkWMinNudgeChunk: 0,
    stretchShrinkWMinNudgeSlice: 0,
    stretchShrinkHStart: '1px',
    stretchShrinkHSpeed: 0,
    stretchShrinkHMin: '--',
    stretchShrinkHMinNudgeChunk: 0,
    stretchShrinkHMinNudgeSlice: 0
  });

  public Settings$ = this.Settings.asObservable();

  constructor(private zone: NgZone) { }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target : this.TargetName,
        notification : 'loadComplete'
      });
    });
  }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event) =>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.Settings.next(event.data.payload);
        }
      });
    };
    this.sendLoadCompleteNotification();
  }

  public createChannel(broadcastName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.setChannelListener();
  }

  public sendData(data: StretchShrinkReadings):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        notification: 'data',
        payload: data
      });
    });
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
