import { Injectable, NgZone } from '@angular/core';
import { BaseSizeAnalyzerInterface } from '@site-types';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeCReadoutService {

  private DataChannel!          : BroadcastChannel;
  private ComponentChannelName! : string;
  private TargetName!           : string;

  private Readings : BehaviorSubject<BaseSizeAnalyzerInterface> = new BehaviorSubject<BaseSizeAnalyzerInterface>({
    fullWidth  : 0,
    baseWidth  : 0,
    chunkWidth : 0,
    sliceWidth : 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor(private zone : NgZone) { }

  private createChannelListener() : void{
    this.DataChannel.onmessage = ((event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ComponentChannelName){
          this.Readings.next(event.data.payload);
        }
      });
    });
  }

  public createBroadcastChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel          = new BroadcastChannel(broadcastName);
    this.ComponentChannelName = channelName;
    this.TargetName           = targetName;
    this.createChannelListener();
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
