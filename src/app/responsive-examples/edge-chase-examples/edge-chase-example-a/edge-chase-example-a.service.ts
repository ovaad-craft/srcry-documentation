import { Injectable } from '@angular/core';
import { SrcryPropReadings } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseExampleAService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  public createBroadcastChannel(dataChannelName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
  }

  public sendData(data : SrcryPropReadings) : void{
    this.DataChannel.postMessage({
      notification: 'data',
      target  : this.TargetName,
      payload : data
    });
  }

  public closeChannel():void{ this.DataChannel.close(); }
}
