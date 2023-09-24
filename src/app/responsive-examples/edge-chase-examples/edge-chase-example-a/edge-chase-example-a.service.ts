import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseExampleAService {

  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  constructor(private zone: NgZone) { }

  public createBroadcastChannel(dataChannelName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
  }
}
