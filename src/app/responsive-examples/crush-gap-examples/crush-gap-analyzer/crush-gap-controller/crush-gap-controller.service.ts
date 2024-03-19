import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CrushGapPropData, SrcryPropReadings, CrushGapSettings } from '@site-types';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Injectable({
  providedIn: 'root'
})
export class CrushGapControllerService {

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

  public getChannelDefaults(): CrushGapSettings{
    return {
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
      ))
    }
  }

  public updateReadings(readings: SrcryPropReadings):void{
    this.Readings.next(readings);
  }

  public getDefaultSettings() : CrushGapPropData{ return this.DefaultSettings; }
}
