import { Injectable, NgZone } from '@angular/core';
import { BaseSizePropData, BaseSizeProps, BaseSizeValues } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeAnalyzerControllerService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  DefaultSettings : BaseSizeProps = {
    baseSizeW           : 'xTiny-1-5',
    baseSizeWNudgeChunk : 0,
    baseSizeWNudgeSlice : 0,
    baseSizeH           : 'tiny-1-5',
    baseSizeHNudgeChunk : 0,
    baseSizeHNudgeSlice : 0
  };

  DefaultControlSettings : BaseSizePropData = {
    baseSizeW           : {size : 'xTiny', scale : '1', speed : '5'},
    baseSizeWNudgeChunk : 0,
    baseSizeWNudgeSlice : 0,
    baseSizeH           : {size : 'tiny', scale : '1', speed : '5'},
    baseSizeHNudgeChunk : 0,
    baseSizeHNudgeSlice : 0
  }

  private Readings : BehaviorSubject<BaseSizeValues> = new BehaviorSubject<BaseSizeValues>({
    width : 0, height : 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor(private zone : NgZone) { }

  private createChannelListener() : void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName  && event.data.notification === 'data'){
          this.Readings.next(event.data.payload);
        }
        if(event.data.target === this.ChannelName && event.data.notification === 'loadComplete'){
          this.sendData(this.DefaultSettings);
        }
      });
    };
  }

  public createChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
    this.createChannelListener();
  }

  public sendData(data : BaseSizeProps) : void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target  : this.TargetName,
        payload : data
      });
    });
  }

  public getDefaultSettings(): BaseSizePropData{
    return this.DefaultControlSettings;
  }

  public closeChannel():void{
    this.DataChannel.close();
  }
}
