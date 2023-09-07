import { Injectable, NgZone } from '@angular/core';
import { TextAnalyzerInterface, TextSizeInterface, TextSizePropInterface, TextSizeProps } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerInputService {

  DataChannel!: BroadcastChannel;
  ComponentChannelName!: string;
  DefaultValue: TextSizeInterface = {size: 'title', speed: '1'};

  private TextSizeReading: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  TextSizeReading$ = this.TextSizeReading.asObservable();

  constructor(private zone: NgZone){}

  private setChannelListener(): void{
    this.DataChannel.onmessage = (event) => {
      this.zone.run(()=> {
        if(event.data.target === this.ComponentChannelName){
          
          if(event.data.notification === 'loadComplete'){
            this.sendTextSize(this.DefaultValue);
            console.log(event.data.notification);
          }
          if(event.data.notification === 'data'){
            this.setSize(event.data.payload);
            console.log(event.data.payload);
          }
        }
      });
    }
  }

  public createDataChannel(dataChannelName: string, componentChannelName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ComponentChannelName = componentChannelName;
    this.setChannelListener();
  }

  private setSize(newSize: number): void{
    this.TextSizeReading.next(newSize);
  }

  public sendTextSize(size: TextSizeInterface):void{
    this.zone.run(()=> {
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'data',
        payload: size
      });
    });
  }

  public closeDataChannel():void{
    this.DataChannel.close();
  }
}
