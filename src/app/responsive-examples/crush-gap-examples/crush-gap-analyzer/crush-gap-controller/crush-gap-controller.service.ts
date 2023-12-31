import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrushGapPropData, SrcryPropReadings, CrushGapSettings } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class CrushGapControllerService {

  constructor(private zone: NgZone) { }

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  DefaultSettings : CrushGapPropData = {
    crushGapW           : {size : 'xTiny', scale : '1', speed : '4'},
    crushGapWNudgeChunk : 0,
    crushGapWNudgeSlice : 0,
    crushGapH           : {size : 'xTiny', scale : '2', speed : '4'},
    crushGapHNudgeChunk : 0,
    crushGapHNudgeSlice : 0
  };

  private Readings : BehaviorSubject<SrcryPropReadings> = new BehaviorSubject<SrcryPropReadings>({
    activePropW : '--',
    activePropH : '--',
    width       : 0,
    height      : 0
  });

  Readings$ = this.Readings.asObservable();


  private createChannelListener():void{
    this.DataChannel.onmessage = (event)=>{
      this.zone.run(()=>{
        if(event.data.target === this.ChannelName){

          if(event.data.notification === 'loadComplete'){
            this.sendData({
              ...this.DefaultSettings,
              crushGapW: createCssVariable(createBoxSize(
                this.DefaultSettings.crushGapW.size,
                this.DefaultSettings.crushGapW.scale,
                this.DefaultSettings.crushGapW.speed
              )),
              crushGapH: createCssVariable(createBoxSize(
                this.DefaultSettings.crushGapH.size,
                this.DefaultSettings.crushGapH.scale,
                this.DefaultSettings.crushGapH.speed
              )),
            });
          }
          if(event.data.notification === 'data'){
            this.Readings.next(event.data.payload);
          }

        }
      });
    };
  }

  public createBroadcastChannel(broadcastName : string, channelName : string, targetName : string) : void{
    this.DataChannel = new BroadcastChannel(broadcastName);
    this.ChannelName = channelName;
    this.TargetName  = targetName;
    this.createChannelListener();
  }

  public sendData(data: CrushGapSettings):void{
    this.zone.run(()=>{
      this.DataChannel.postMessage({
        target  : this.TargetName,
        payload : data
      });
    });
  }

  public getDefaultSettings() : CrushGapPropData{ return this.DefaultSettings; }

  public closeChannel() : void{ this.DataChannel.close(); }
}
