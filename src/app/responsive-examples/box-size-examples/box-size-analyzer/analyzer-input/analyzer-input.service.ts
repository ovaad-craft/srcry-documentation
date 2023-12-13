import { Injectable, NgZone } from '@angular/core';
import { BoxAnalyzerInterface, BoxSizeInterface } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyzerInputService {

  DataChannel!          : BroadcastChannel;
  ComponentChannelName! : string;

  private BoxReadings : BehaviorSubject<BoxAnalyzerInterface> = new BehaviorSubject<BoxAnalyzerInterface>({coreBoxWidth: 0, fullBoxWidth: 0});
  BoxReadings$ = this.BoxReadings.asObservable();

  DefaultValue : BoxSizeInterface = {size: 'xTiny', scale: '1', speed: '5'}

  constructor(private zone : NgZone) { }

  private setChannelListener():void{
    this.DataChannel.onmessage = (event) => {
      this.zone.run(() => {

        if(event.data.target === this.ComponentChannelName){

          if(event.data.notification === 'loadComplete'){
            this.sendData(this.DefaultValue);
          }
          
          if(event.data.notification === 'data'){
            this.BoxReadings.next(event.data.payload);
          }

        }
      });
    }
  }

  public sendData(data: BoxSizeInterface): void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target  : this.ComponentChannelName,
        payload : data
      });
    });
  }

  public createDataChannel(dataChannelName: string, componentChannelName: string): void{
    this.DataChannel          = new BroadcastChannel(dataChannelName);
    this.ComponentChannelName = componentChannelName;
    this.setChannelListener();
  }

  public closeDataChannel():void{ this.DataChannel.close(); }
}
