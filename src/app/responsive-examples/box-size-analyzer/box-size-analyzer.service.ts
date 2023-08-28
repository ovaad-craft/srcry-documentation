import { Injectable, NgZone } from '@angular/core';
import { BoxAnalyzerInterface, BoxAnalyzerPropSizes, BoxSizeInterface } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class BoxSizeAnalyzerService {

  DataChannel!: BroadcastChannel;
  DataChannelName!: string;
  ComponentChannel: BehaviorSubject<string> = new BehaviorSubject<string>('');
  ComponentChannelName!: string;

  private BoxSizeValue: BehaviorSubject<BoxAnalyzerPropSizes> = new BehaviorSubject<BoxAnalyzerPropSizes>({
    core: 'none',
    full: 'none'
  });
  BoxSizeValue$ = this.BoxSizeValue.asObservable();

  constructor(private zone: NgZone) { }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event)=> {
      this.zone.run(()=>{
        if(event.data.target === this.ComponentChannelName){
          this.setSizes(event.data.payload);
        }
      });
    }
  }

  public createDataChannel(dataChannelName: string, componentChannelName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ComponentChannel.next(componentChannelName);
    this.DataChannelName = dataChannelName;
    this.ComponentChannelName = componentChannelName;
    this.setChannelListener();
    this.sendLoadCompleteNotification();
  }


  private sendLoadCompleteNotification(): void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'loadComplete'
      });
    });
  }

  public sendBoxReadings(readings: BoxAnalyzerInterface):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'data',
        payload: readings
      });
    });
  }

  public closeDataChannel():void{ this.DataChannel.close(); }

  private setSizes(newSize: BoxSizeInterface): void{
    this.BoxSizeValue.next({
      core: createCssVariable(createBoxSize(newSize.size, newSize.scale, '1')),
      full: createCssVariable(createBoxSize(newSize.size, newSize.scale, newSize.speed))
    });
  }


}
