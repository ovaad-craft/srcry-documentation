import { Injectable, NgZone } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { LineSizeProps, LineSizes } from '@site-types';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { createLineSize } from 'src/app/utils/create-line-size';

@Injectable({
  providedIn: 'root'
})
export class LineSizeAnalyzerService {

  BroadcastChannel!: BroadcastChannel;
  ComponentChannelName!: string;

  CurrentSize: BehaviorSubject<string> = new BehaviorSubject<string>('');
  CurrentSize$ = this.CurrentSize.asObservable();

  constructor(private zone: NgZone) { }

  private sendLoadCompleteNotification():void{
    this.zone.run(()=>{
      this.BroadcastChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'loadComplete'
      });
    });
  }

  private updateCurrentSize(newSize: LineSizes): void{
    this.CurrentSize.next(createCssVariable(createLineSize(newSize)));
  }

  private setChannelListener():void{
    this.BroadcastChannel.onmessage = (event) =>{
      this.zone.run(()=>{
        if(event.data.target = this.ComponentChannelName){
          this.updateCurrentSize(event.data.payload);
        }
      });
    };
  }

  public createBroadcastChannel(broadcastName: string, componentChannelName: string): void{
    this.BroadcastChannel = new BroadcastChannel(broadcastName);
    this.ComponentChannelName = componentChannelName;
    this.setChannelListener();
    this.sendLoadCompleteNotification();
  }

  public sendData(size: number):void{
    this.zone.run(()=>{
      this.BroadcastChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'data',
        payload: size
      });
    });
  }

}
