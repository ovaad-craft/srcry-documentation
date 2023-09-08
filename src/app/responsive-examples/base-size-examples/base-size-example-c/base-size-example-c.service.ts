import { Injectable, NgZone } from '@angular/core';
import { BaseSizeAnalyzerInterface } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeExampleCService {

  DataChannel!: BroadcastChannel;
  ComponentChannelName!: string;

  constructor(private zone: NgZone){}

  public createBroadcastChannel(broadcastName: string, channelName: string): void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ComponentChannelName = channelName;
  }

  public sendData(data: BaseSizeAnalyzerInterface):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        payload: data
      });
    });
  }

  public closeChannel():void{
    this.DataChannel.close();
  }


}
