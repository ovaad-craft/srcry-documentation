import { Injectable } from '@angular/core';
import { SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseReadoutService {

  private DataChannel! : BroadcastChannel;
  private ChannelName! : string;

  private Readings : BehaviorSubject<SrcryPropReadings> = new BehaviorSubject<SrcryPropReadings>({
    activePropW : '--',
    activePropH : '--',
    width       : 0,
    height      : 0
  });
  public Readings$ = this.Readings.asObservable();

  constructor() { }

  public createBroadcastChannel(broadcastName : string, channelName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.createChannelListener();
  }

  public createChannelListener() : void{
    this.DataChannel.onmessage = (event)=>{
      if(event.data.target === this.ChannelName){
        this.Readings.next(event.data.payload);
      }
    };
  }

  public closeDataChannel() : void{ this.DataChannel.close(); }
}
