import { Injectable } from '@angular/core';
import { TextAnalyzerBData, TextAnalyzerBInterface, TextAnalyzerBReading } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { createTextSize } from 'src/app/utils/create-text-size';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerBControllerService {
  private DataChannel! : BroadcastChannel;
  private ChannelName! : string;
  private TargetName!  : string;

  private DefaultSettings : TextAnalyzerBData = {
    textSize:{
      size  : 'widget',
      speed : '3'
    },
    textNudge : 0
  }

  private Reading : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public Reading$ = this.Reading.asObservable();

  private setChannelListener() : void{
    this.DataChannel.onmessage = (event)=>{

      if(event.data.target === this.ChannelName){

        if(event.data.notification === 'loadComplete'){
          this.sendData({
            textSize  : createTextSize(this.DefaultSettings.textSize.size, this.DefaultSettings.textSize.speed),
            textNudge : this.DefaultSettings.textNudge
          });
        }
        if(event.data.notification === 'data'){
          this.Reading.next(event.data.payload);
        }

      }
    }
  }

  public createChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
    this.setChannelListener();
  }

  public sendData(data : TextAnalyzerBInterface) : void{
    this.DataChannel.postMessage({
      target  : this.TargetName,
      payload : {
        textSize  : `var(--${data.textSize})`,
        textNudge : data.textNudge
      }

    });
  }

  public getDefaults() : TextAnalyzerBData{ return this.DefaultSettings; }

  public closeChannel() : void{
    this.DataChannel.close();
  }
}
