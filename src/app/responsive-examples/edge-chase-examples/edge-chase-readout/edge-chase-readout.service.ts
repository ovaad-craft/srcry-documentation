import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseReadoutService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;

  constructor() { }

  public createBroadcastChannel(broadcastName: string, channelName: string):void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
  }
}
