import { Injectable, NgZone } from '@angular/core';
import { BaseSizeAnalyzerInterface } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeExampleDService {

  DataChannel!: BroadcastChannel;
  ComponentChannelName!: string;

  constructor(private zone: NgZone) { }

  public createChannel(broadcastName: string, componentChannelName: string):void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ComponentChannelName = componentChannelName;
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
