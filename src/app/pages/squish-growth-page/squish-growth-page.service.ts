import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BroadcastRegistry, SquishGrowthProps } from '@site-types';
import { SquishGrowthAnalyzerControllerService } from 'src/app/responsive-examples/squish-growth-examples/squish-growth-analyzer/squish-growth-analyzer-controller/squish-growth-analyzer-controller.service';
import { SquishGrowthExampleAControllerService } from 'src/app/responsive-examples/squish-growth-examples/squish-growth-example-a/squish-growth-example-a-controller/squish-growth-example-a-controller.service';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthPageService implements OnDestroy {

  DataChannel!: BroadcastChannel;
  ChannelRegistries: BroadcastRegistry[] = [];

  constructor(
    private zone: NgZone,
    private exampleA: SquishGrowthExampleAControllerService,
    private exampleB: SquishGrowthAnalyzerControllerService
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

  public sendData(data: SquishGrowthProps, channel: string){
    this.DataChannel.postMessage({
      target: channel,
      payload: {
        ...data,
        squishGrowthWMax: createCssVariable(data.squishGrowthWMax),
        squishGrowthHMax: createCssVariable(data.squishGrowthHMax)
      }
    });
  }

}
