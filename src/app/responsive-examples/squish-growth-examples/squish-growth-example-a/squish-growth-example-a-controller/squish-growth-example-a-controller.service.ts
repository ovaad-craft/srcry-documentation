import { Injectable } from '@angular/core';
import { SquishGrowthReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthExampleAControllerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<SquishGrowthReadings> = new BehaviorSubject<SquishGrowthReadings>({
    fullSize: 0,
    baseSize: 0,
    growthSize: 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor() { }

  public createChannel(dataChannelName: string, channelName: string, targetName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.createChannelListener();
  }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      if(event.data.target === this.ChannelName){
        this.Readings.next(event.data.payload);
      }
    }
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
