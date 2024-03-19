import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BroadcastRegistry, StretchShrinkProps } from '@site-types';
import { StretchShrinkControllerService } from 'src/app/responsive-examples/stretch-shrink-examples/stretch-shrink-analyzer/stretch-shrink-controller/stretch-shrink-controller.service';
import { StretchShrinkExampleAReadoutService } from 'src/app/responsive-examples/stretch-shrink-examples/stretch-shrink-example-a/stretch-shrink-example-a-readout/stretch-shrink-example-a-readout.service';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class StretchShrinkPageService implements OnDestroy {

  DataChannel!: BroadcastChannel;
  ChannelRegistries: BroadcastRegistry[] = [];

  constructor(
    private zone: NgZone,
    private exampleA: StretchShrinkExampleAReadoutService,
    private exampleB: StretchShrinkControllerService
  ) { }

  ngOnDestroy(): void {
      this.DataChannel.close();
  }

  public createBroadcastChannel(name: string): void{
    this.DataChannel = new BroadcastChannel(name);
    this.createChannelListener();
  }

  public addRegistry(registry: BroadcastRegistry): void{
    this.ChannelRegistries.push(registry);
  }

  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=> {
        const target: number = this.ChannelRegistries.findIndex(a=> a.channel === event.data.target);
        const item: BroadcastRegistry = this.ChannelRegistries[target];

        if(event.data.notification === 'loadComplete'){
          if(item.defaultValues){
            if(item.serviceName === 'exampleB'){
              this.sendData(this.exampleB.getChannelDefaults(), item.target);
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

  public sendData(data: StretchShrinkProps, channel: string){
    this.DataChannel.postMessage({
      target: channel,
      payload: {
        ...data,
        stretchShrinkWMin: createCssVariable(data.stretchShrinkWMin),
        stretchShrinkHMin: createCssVariable(data.stretchShrinkHMin)
      }
    });
  }
}
