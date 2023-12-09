import { Injectable, NgZone } from '@angular/core';
import { SrcryPropReadings, CrushGapSettings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrushGapAnalyzerService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  private Settings: BehaviorSubject<CrushGapSettings> = new BehaviorSubject<CrushGapSettings>({
    crushGapW           : '--',
    crushGapWNudgeChunk : 0,
    crushGapWNudgeSlice : 0,
    crushGapH           : '--',
    crushGapHNudgeChunk : 0,
    crushGapHNudgeSlice : 0
  });

  public Settings$ = this.Settings.asObservable();

  constructor(private zone : NgZone) { }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target       : this.TargetName,
        notification : 'loadComplete'
      });
    });
  }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.updateData(event.data.payload);
        }
      });
    };
  }

  public createBroadcastChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
    this.setChannelListener();
    this.sendLoadCompleteNotification();
  }

  private updateData(data : CrushGapSettings) : void{
    this.Settings.next(data);
  }

  public sendData(data : SrcryPropReadings) : void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target       : this.TargetName,
        notification : 'data',
        payload      : data
      });
    });
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
