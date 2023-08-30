import { Injectable, NgZone } from '@angular/core';
import { TextAnalyzerInterface, TextSizeInterface, TextSizePropInterface } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { createTextSize } from 'src/app/utils/create-text-size';

@Injectable({
  providedIn: 'root'
})
export class TextSizeAnalyzerService {

  DataChannel!: BroadcastChannel;
  ComponentChannelName!: string;

  private TextSizeValue: BehaviorSubject<TextSizePropInterface> = new BehaviorSubject<TextSizePropInterface>({
    core: 'none',
    full: 'none'
  });

  TextSizeValue$ = this.TextSizeValue.asObservable();
  //DefaultValue: TextSizeInterface = {size: 'article', speed: '3'};

  constructor(private zone: NgZone){}

  private setChannelListener(): void{
    this.DataChannel.onmessage = (event) => {
      this.zone.run(()=> {
        if(event.data.target === this.ComponentChannelName){
          this.setSizes(event.data.payload);
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

  private setSizes(newSize: TextSizeInterface): void{
    this.TextSizeValue.next({
      core: createCssVariable(createTextSize(newSize.size, '1')),
      full: createCssVariable(createTextSize(newSize.size, newSize.speed))
    })
  }

  public sendTextSizeReadings(readings: TextAnalyzerInterface):void{
    this.zone.run(()=> {
      this.DataChannel.postMessage({
        target: this.ComponentChannelName,
        notification: 'data',
        payload: readings
      });
    });
  }
}
