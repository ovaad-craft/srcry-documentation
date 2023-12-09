import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KerningAnalyzerService {
  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  private Setting : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  Setting$ = this.Setting.asObservable();

  constructor(private zone : NgZone) { }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target       : this.TargetName,
        notification : 'loadComplete'
      });
    });
  }

  private setChannelListener() : void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){
          this.Setting.next(event.data.payload);
        }
      });
    }

    this.sendLoadCompleteNotification();
  }

  public createChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
    this.setChannelListener();
  }

  public sendData(data : number) : void {
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target       : this.TargetName,
        notification : 'data',
        payload      : data
      });
    });
  }

  public closeChannel() : void{
    this.DataChannel.close();
  }
}
