import { Injectable, NgZone } from '@angular/core';
import { StretchShrinkReadings } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkExampleAService {
  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  public createChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
  }

  public sendData(data : StretchShrinkReadings) : void{
    this.DataChannel.postMessage({
      notification: 'data',
      target  : this.TargetName,
      payload : data
    });
  }

  public closeChannel() : void{
    this.DataChannel.close();
  }
}
