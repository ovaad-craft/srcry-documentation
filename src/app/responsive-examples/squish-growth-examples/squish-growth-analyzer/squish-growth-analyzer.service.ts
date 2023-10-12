import { Injectable, NgZone } from '@angular/core';
import { SquishGrowthAnalyzerReadings, SquishGrowthSettings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthAnalyzerService {
  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Settings: BehaviorSubject<SquishGrowthSettings> = new BehaviorSubject<SquishGrowthSettings>({
    squishGrowthWStart: '',
    squishGrowthWSpeed: 0,
    squishGrowthWMax: '',
    squishGrowthWMaxNudgeScale: 0,
    squishGrowthWMaxNudgeSlice: 0,
    squishGrowthHStart: '',
    squishGrowthHSpeed: 0,
    squishGrowthHMax: '',
    squishGrowthHMaxNudgeScale: 0,
    squishGrowthHMaxNudgeSlice: 0
  });

  public Settings$ = this.Settings.asObservable();

  constructor(private zone: NgZone) { }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.Settings.next(event.data.payload);
        }
      });
    };
    this.sendLoadCompleteNotification();
  }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        notification: 'loadComplete'
      });
    });
  }

  public createDataChannel(dataChannelName: string, channelName: string, targetName: string):void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;

    this.createChannelListener();
  }

  public sendData(data: SquishGrowthAnalyzerReadings):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        notification: 'data',
        payload: data
      });
    });
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
