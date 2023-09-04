import { Injectable, NgZone } from '@angular/core';
import { LineSizeProps } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineAnalyzerInputService {

  DataChannel!: BroadcastChannel;
  ComponentChannelName!: string;

  DefaultValue: LineSizeProps = 'line-narrow';
  private ReadoutValue: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  ReadoutValue$ = this.ReadoutValue.asObservable();

  constructor(private zone: NgZone) { }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ComponentChannelName){

          if(event.data.notification === 'loadComplete'){
            this.DataChannel.postMessage({
              target: this.ComponentChannelName,
              notification: 'data',
              payload: this.DefaultValue
            });
          }
          if(event.data.notification === 'data'){
            this.updateReadoutValue(event.data.payload);
          }

        }
      });
    }
  }

  public createBroadcastChannel(channelName: string, componentChannelName: string): void{
    this.DataChannel = new BroadcastChannel(channelName);
    this.ComponentChannelName = componentChannelName;
    this.createChannelListener();
  }

  private updateReadoutValue(size: number): void{
    this.ReadoutValue.next(size);
  }

  public sendData(size: LineSizeProps): void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'data',
        payload: size
      });
    });
  }

  public closeChannel():void{ this.DataChannel.close(); }
}
