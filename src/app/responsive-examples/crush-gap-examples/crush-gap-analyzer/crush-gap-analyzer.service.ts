import { Injectable, NgZone } from '@angular/core';
import { CrushGapProps } from '@site-types';

@Injectable({
  providedIn: 'root'
})
export class CrushGapAnalyzerService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName! : string;

  constructor(private zone: NgZone) { }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.updateData(event.data.payload);
        }
      });
    };
  }

  public createBroadcastChannel(broadcastName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.setChannelListener();
  }

  private updateData(data: CrushGapProps):void{}
}
