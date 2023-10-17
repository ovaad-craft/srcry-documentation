import { Injectable, NgZone } from '@angular/core';
import { StretchShrinkReadings } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkExampleAService {
  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  constructor(private zone: NgZone) { }

  public createChannel(broadcastName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
  }

  public sendData(data: StretchShrinkReadings):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        payload: data
      });
    });
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
