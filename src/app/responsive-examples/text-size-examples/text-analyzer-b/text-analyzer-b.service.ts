import { Injectable, NgZone } from '@angular/core';
import { TextAnalyzerBInterface } from '@site-types';
import{ BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerBService {

  DataChannel!: BroadcastChannel;
  ChannelName!: string;
  TargetName!: string;

  private Settings: BehaviorSubject<TextAnalyzerBInterface> = new BehaviorSubject<TextAnalyzerBInterface>({
    textSize: '0',
    textNudge: 0
  });
  public Settings$ = this.Settings.asObservable();

  constructor(private zone: NgZone) { }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.TargetName,
        notification: 'loadComplete'
      });
    });
  }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event)=> {
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.Settings.next(event.data.payload);
        }
      });
    }
    this.sendLoadCompleteNotification();
  }

  public createDataChannel(dataChannelName: string, channelName: string, targetName: string):void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ChannelName = channelName;
    this.TargetName = targetName;
    this.setChannelListener();

  }

  public sendData(data: number): void{
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
