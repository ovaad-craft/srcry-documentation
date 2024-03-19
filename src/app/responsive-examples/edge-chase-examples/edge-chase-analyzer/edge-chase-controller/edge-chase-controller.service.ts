import { Injectable } from '@angular/core';
import { EdgeChaseData, EdgeChaseSettings, SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';
import { createBoxSize } from 'src/app/utils/create-box-size';
import { createCssVariable } from 'src/app/utils/create-css-variable';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseControllerService {

  private Readings : BehaviorSubject<SrcryPropReadings> = new BehaviorSubject<SrcryPropReadings>({
    activePropW : '--',
    activePropH : '--',
    width       : 0,
    height      : 0
  });

  public Readings$ = this.Readings.asObservable();

  public DefaultSettings : EdgeChaseData = {
    edgeChaseW : {
      size  : 'loMed',
      scale : '2',
      speed : '8'
    },
    edgeChaseWNudgeChunk : 0,
    edgeChaseWNudgeSlice : 0,
    edgeChaseH : {
      size  : 'loMed',
      scale : '2',
      speed : '8'
    },
    edgeChaseHNudgeChunk : 0,
    edgeChaseHNudgeSlice : 0,
    chaseStopW : {
      size  : 'hiMed',
      scale : '1',
      speed : '6'
    },
    chaseStopWNudgeChunk : 0,
    chaseStopWNudgeSlice : 0,
    chaseStopH : {
      size  : 'loMed',
      scale : '2',
      speed : '4'
    },
    chaseStopHNudgeChunk : 0,
    chaseStopHNudgeSlice : 0
  }

  public getDefaultChannelSettings(): EdgeChaseSettings{
    return {
      ...this.DefaultSettings,
      edgeChaseW: createCssVariable(createBoxSize(
        this.DefaultSettings.edgeChaseW.size,
        this.DefaultSettings.edgeChaseW.scale,
        this.DefaultSettings.edgeChaseW.speed
      )),
      edgeChaseH: createCssVariable(createBoxSize(
        this.DefaultSettings.edgeChaseH.size,
        this.DefaultSettings.edgeChaseH.scale,
        this.DefaultSettings.edgeChaseH.speed
      )),
      chaseStopW: createCssVariable(createBoxSize(
        this.DefaultSettings.chaseStopW.size,
        this.DefaultSettings.chaseStopW.scale,
        this.DefaultSettings.chaseStopW.speed
      )),
      chaseStopH: createCssVariable(createBoxSize(
        this.DefaultSettings.chaseStopH.size,
        this.DefaultSettings.chaseStopH.scale,
        this.DefaultSettings.chaseStopH.speed
      ))
    };
  }

  public updateReadings(readings: SrcryPropReadings):void{
    this.Readings.next(readings);
  }

  public getDefaultSettings() : EdgeChaseData{
    return this.DefaultSettings;
  }
  
}
