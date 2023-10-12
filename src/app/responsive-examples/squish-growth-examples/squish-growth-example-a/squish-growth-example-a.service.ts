import { Injectable, NgZone } from '@angular/core';
import { SquishGrowthReadings } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthExampleAService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  constructor(private zone: NgZone) { }

  public createChannel(dataChannelName: string, channelName: string, targetName: string): void{
    this. DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
  }

  public sendData(data: SquishGrowthReadings): void{
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
