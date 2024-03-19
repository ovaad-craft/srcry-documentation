import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BroadcastRegistry, CrushGapSettings } from '@site-types';
import { CrushGapControllerService } from 'src/app/responsive-examples/crush-gap-examples/crush-gap-analyzer/crush-gap-controller/crush-gap-controller.service';

@Injectable({
  providedIn: 'root'
})
export class CrushGapPageService implements OnDestroy {

  DataChannel! : BroadcastChannel;
  ChannelRegistries: BroadcastRegistry[] = [];

  constructor(
    private zone: NgZone,
    private exampleB: CrushGapControllerService
  ) { }

  ngOnDestroy(): void {
    this.closeChannel();
  }

  public createBroadcastChannel(name:string):void{
    this.DataChannel = new BroadcastChannel(name);
    this.createChannelListener();
  }

  public createRegistry(registry: BroadcastRegistry):void{
    this.ChannelRegistries.push(registry);
  }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event=>{
      const target: number = this.ChannelRegistries.findIndex(a => a.channel === event.data.target);
      const entry: BroadcastRegistry = this.ChannelRegistries[target];

      if(event.data.notification === 'loadComplete'){
        if(entry.defaultValues){
          if(entry.serviceName === 'exampleB'){
            this.sendData(this.exampleB.getChannelDefaults(), entry.target);
          }
        }
      }
      if(event.data.notification === 'data'){
        if(entry.serviceName === 'exampleB'){
          this.exampleB.updateReadings(event.data.payload);
        }
      }
    });
  }

  public sendData(data: CrushGapSettings, channel: string):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target: channel,
        payload: data
      });
    });
  }

  private closeChannel():void{
    this.DataChannel.close();
  }
}
