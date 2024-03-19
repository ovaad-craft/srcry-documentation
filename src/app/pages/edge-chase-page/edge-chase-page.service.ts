import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BroadcastRegistry, EdgeChaseSettings } from '@site-types';
import { EdgeChaseControllerService } from 'src/app/responsive-examples/edge-chase-examples/edge-chase-analyzer/edge-chase-controller/edge-chase-controller.service';
import { EdgeChaseReadoutService } from 'src/app/responsive-examples/edge-chase-examples/edge-chase-readout/edge-chase-readout.service';

@Injectable({
  providedIn: 'root'
})
export class EdgeChasePageService implements OnDestroy {

  DataChannel! : BroadcastChannel;
  ChannelRegistries : BroadcastRegistry[] = [];

  constructor(
    private zone: NgZone,
    private exampleA: EdgeChaseReadoutService,
    private exampleB: EdgeChaseControllerService
  ) { }

  ngOnDestroy(): void { this.DataChannel.close(); }

  public createBroadcastChannel(name: string): void{
    this.DataChannel = new BroadcastChannel(name);
    this.createChannelListener();
  }

  public addRegistry(registry: BroadcastRegistry): void{
    this.ChannelRegistries.push(registry);
  }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=> {
      this.zone.run(()=> {
        const target: number = this.ChannelRegistries.findIndex(a=> a.channel === event.data.target);
        const item: BroadcastRegistry = this.ChannelRegistries[target];

        if(event.data.notification === 'loadComplete'){
          if(item.defaultValues){
            if(item.serviceName === 'exampleB'){
              this.sendData(this.exampleB.getDefaultChannelSettings(), item.target);
            }
          }
        }
        if(event.data.notification === 'data'){
          if(item.serviceName === 'exampleA'){
            this.exampleA.updateReadings(event.data.payload);
          }
          if(item.serviceName === 'exampleB'){
            this.exampleB.updateReadings(event.data.payload);
          }
        }
      });
    };
  }

  public sendData(data: EdgeChaseSettings, channel: string): void{
    this.DataChannel.postMessage({
      target: channel,
      payload: data
    });
  }
}
