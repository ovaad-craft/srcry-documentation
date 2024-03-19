import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { BaseSizeAnalyzerInterface, BaseSizeProps, BroadcastRegistry } from '@site-types';
import { BaseSizeAnalyzerControllerService } from 'src/app/responsive-examples/base-size-examples/base-size-analyzer/base-size-analyzer-controller/base-size-analyzer-controller.service';
import { BaseSizeCReadoutService } from 'src/app/responsive-examples/base-size-examples/base-size-example-c/base-size-c-readout/base-size-c-readout.service';
import { BaseExampleDReadoutService } from 'src/app/responsive-examples/base-size-examples/base-size-example-d/base-example-d-readout/base-example-d-readout.service';

@Injectable({
  providedIn: 'root'
})
export class BaseSizePageService implements OnDestroy {

  DataChannel!      : BroadcastChannel;
  ChannelRegistries : BroadcastRegistry[] = [];

  constructor(
    private zone: NgZone,
    private exampleC: BaseSizeCReadoutService,
    private exampleD: BaseExampleDReadoutService,
    private exampleE: BaseSizeAnalyzerControllerService
    ) {}

    ngOnDestroy(): void {
        this.closeChannel();
    }

    public createBroadcastChannel(name: string): void{
      this.DataChannel = new BroadcastChannel(name);
      this.createChannelListener();
    }

    public addRegistry(registry: BroadcastRegistry): void {
      this.ChannelRegistries.push(registry);
    }

    private createChannelListener(): void {
      this.DataChannel.onmessage = (event)=>{
        this.zone.run(()=>{
          
          const target: number = this.ChannelRegistries.findIndex(a => a.channel === event.data.target);

          if(event.data.notification === 'loadComplete'){
            if(this.ChannelRegistries[target].defaultValues){
              if(this.ChannelRegistries[target].serviceName === 'exampleE'){
                this.sendData(this.exampleE.DefaultSettings, this.ChannelRegistries[target].target);
              }
            }
          }
          if(event.data.notification === 'data'){
            
            if(this.ChannelRegistries[target].serviceName === 'exampleC'){
              this.exampleC.updateSettings(event.data.payload);
            }
            if(this.ChannelRegistries[target].serviceName === 'exampleD'){
              this.exampleD.updateReadings(event.data.payload);
            }
            if(this.ChannelRegistries[target].serviceName === 'exampleE'){
              this.exampleE.updateReadings(event.data.payload);
            }
          }
        });
      }
    }

    public sendData(data: BaseSizeProps | BaseSizeAnalyzerInterface, channel: string):void{
      this.DataChannel.postMessage({
        target: channel,
        payload: data
      });
    }



    public closeChannel():void{ this.DataChannel.close(); }
}
