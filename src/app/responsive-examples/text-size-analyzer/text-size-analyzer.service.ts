import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TextAnalyzerInterface, TextSizeInterface } from '@site-types';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { createTextSize } from 'src/app/utils/create-text-size';


@Injectable({
  providedIn: 'root'
})
export class TextSizeAnalyzerService {

  DataChannel!: BroadcastChannel;
  ComponentChannelName!: string;

  private TextSizeValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  TextSizeValue$ = this.TextSizeValue.asObservable();

  constructor(private zone: NgZone){}

  private setChannelListener(): void{
    this.DataChannel.onmessage = (event) => {
      this.zone.run(()=> {
        if(event.data.target === this.ComponentChannelName){
          
          this.setSize(event.data.payload);
        }
      });
    }
  }

  private sendLoadCompleteNotification():void{
    
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'loadComplete'
      });
    });
  }

  public createDataChannel(dataChannelName: string, componentChannelName: string): void{
    this.DataChannel = new BroadcastChannel(dataChannelName);
    this.ComponentChannelName = componentChannelName;
    this.setChannelListener();
    this.sendLoadCompleteNotification();
  }

  private setSize(newSize: TextSizeInterface): void{
    this.TextSizeValue.next(createCssVariable(createTextSize(newSize.size, newSize.speed)));
  }

  public sendTextSizeReadings(reading: number):void{
    
    this.zone.run(()=> {
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'data',
        payload: reading
      });
    });
  }

  public closeDataChannel():void{
    this.DataChannel.close();
  }
}
