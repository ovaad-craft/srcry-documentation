import { Injectable, NgZone } from '@angular/core';
import { BaseSizeProps, BaseSizeSettings, BaseSizeValues } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeAnalyzerService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  private Settings : BehaviorSubject<BaseSizeSettings> = new BehaviorSubject<BaseSizeSettings>({
    baseSizeW           : '--',
    baseSizeWNudgeChunk : 0,
    baseSizeWNudgeSlice : 0,
    baseSizeH           : '--',
    baseSizeHNudgeChunk : 0,
    baseSizeHNudgeSlice : 0
  });

  Settings$ = this.Settings.asObservable();

  constructor(private zone : NgZone) { }

  private sendLoadCompleteNotification() : void{
    this.DataChannel.postMessage({
      target       : this.TargetName,
      notification : 'loadComplete'
    });
  }

  private createChannelListener() : void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.updateProps(event.data.payload);
        }
      });
    };
  }

  public createBroadcastChannel(dataChannelName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
    this.createChannelListener();
    this.sendLoadCompleteNotification();
  }

  public sendData(data : BaseSizeValues) : void{
    this.DataChannel.postMessage({
      target       : this.TargetName,
      notification : 'data',
      payload      : data
    });
  }

  private updateProps(props : BaseSizeProps) : void{
    const settings : BaseSizeSettings = {
      baseSizeW           : createCssVariable(props.baseSizeW),
      baseSizeWNudgeChunk : props.baseSizeWNudgeChunk,
      baseSizeWNudgeSlice : props.baseSizeWNudgeSlice,
      baseSizeH           : createCssVariable(props.baseSizeH),
      baseSizeHNudgeChunk : props.baseSizeHNudgeChunk,
      baseSizeHNudgeSlice : props.baseSizeHNudgeSlice
    };

    this.Settings.next(settings);
  }

  public closeChannel(): void{
    this.DataChannel.close();
  }
}
