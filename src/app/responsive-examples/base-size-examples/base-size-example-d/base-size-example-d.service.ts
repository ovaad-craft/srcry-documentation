import { Injectable, NgZone } from '@angular/core';
import { BaseSizeAnalyzerInterface } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeExampleDService {

  DataChannel!          : BroadcastChannel;
  ComponentChannelName! : string;
  TargetName!           : string;

  constructor(private zone : NgZone) { }

  public createChannel(broadcastName : string, componentChannelName : string, targetName : string) : void{
    this.DataChannel          = new BroadcastChannel(broadcastName);
    this.ComponentChannelName = componentChannelName;
    this.TargetName           = targetName;
  }

  public sendData(data: BaseSizeAnalyzerInterface):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target  : this.TargetName,
        notification : 'data',
        payload : data
      });
    });
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
