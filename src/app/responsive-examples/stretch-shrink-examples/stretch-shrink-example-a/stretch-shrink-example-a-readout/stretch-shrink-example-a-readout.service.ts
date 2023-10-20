import { Injectable } from '@angular/core';
import { StretchShrinkReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkExampleAReadoutService {

  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  private Readings: BehaviorSubject<StretchShrinkReadings> = new BehaviorSubject<StretchShrinkReadings>({
    height: 0,
    shrinkAmountH: 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor() { }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      if(event.data.target === this.ChannelName){
        this.Readings.next(event.data.payload);
      }
    };
  }

  public createChannel(broadcastName: string, channelName: string, targetName: string):void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName = targetName;

    this.setChannelListener();
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
