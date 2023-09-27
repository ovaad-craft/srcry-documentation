import { Injectable, NgZone } from '@angular/core';
import { EdgeChaseSettings, SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseAnalyzerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<EdgeChaseSettings> = new BehaviorSubject<EdgeChaseSettings>({
    edgeChaseW: '--',
    edgeChaseWNudgeChunk: 0,
    edgeChaseWNudgeSlice: 0,
    edgeChaseH: '--',
    edgeChaseHNudgeChunk: 0,
    edgeChaseHNudgeSlice: 0,
    chaseStopW: '--',
    chaseStopWNudgeChunk: 0,
    chaseStopWNudgeSlice: 0,
    chaseStopH: '--',
    chaseStopHNudgeChunk: 0,
    chaseStopHNudgeSlice: 0

  });

  public Readings$ = this.Readings.asObservable();

  constructor(private zone: NgZone) { }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.Readings.next(event.data.payload);
        }
      });
    };
  }

  public createBroadcastChannel(dataChannelName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.createChannelListener();
    this.sendLoadCompleteNotification();
  }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        notification: 'loadComplete'
      });
    });
  }

  public sendData(data: SrcryPropReadings):void{
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
