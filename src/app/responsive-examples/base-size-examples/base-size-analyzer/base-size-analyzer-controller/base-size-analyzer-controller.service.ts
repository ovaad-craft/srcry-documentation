import { Injectable, NgZone } from '@angular/core';
import { BaseSizePropData, BaseSizeProps, BaseSizeValues } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeAnalyzerControllerService {

  DataChannel! : BroadcastChannel;
  ChannelName! : string;
  TargetName!  : string;

  DefaultSettings : BaseSizeProps = {
    baseSizeW           : 'xTiny-1-5',
    baseSizeWNudgeChunk : 0,
    baseSizeWNudgeSlice : 0,
    baseSizeH           : 'tiny-1-5',
    baseSizeHNudgeChunk : 0,
    baseSizeHNudgeSlice : 0
  };

  DefaultControlSettings : BaseSizePropData = {
    baseSizeW           : {size : 'xTiny', scale : '1', speed : '5'},
    baseSizeWNudgeChunk : 0,
    baseSizeWNudgeSlice : 0,
    baseSizeH           : {size : 'tiny', scale : '1', speed : '5'},
    baseSizeHNudgeChunk : 0,
    baseSizeHNudgeSlice : 0
  }

  private Readings : BehaviorSubject<BaseSizeValues> = new BehaviorSubject<BaseSizeValues>({
    width : 0, height : 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor() { }

  public updateReadings(readings: BaseSizeValues):void{ this.Readings.next(readings); }

  public getDefaultSettings(): BaseSizePropData{
    return this.DefaultControlSettings;
  }
  
}
