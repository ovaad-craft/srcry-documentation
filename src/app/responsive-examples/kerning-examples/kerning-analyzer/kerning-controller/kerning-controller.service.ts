import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KerningControllerService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  DefaultSetting : number = 0;

  private Reading : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public Reading$ = this.Reading.asObservable();

  private setChannelListener() : void{
    this.DataChannel.onmessage = (event)=>{
      if(event.data.target === this.ChannelName){

        if(event.data.notification === 'loadComplete'){
          this.sendData(this.DefaultSetting);
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

  public sendData(data : number) : void{
    this.DataChannel.postMessage({
      target: this.TargetName,
      payload: data
    });
  }

  public getDefault() : number{
    return this.DefaultSetting;
  }

  public closeChannel() : void{
    this.DataChannel.close();
  }
}
