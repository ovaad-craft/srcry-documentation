import { Injectable, NgZone } from '@angular/core';
import { BaseSizeAnalyzerInterface } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseExampleDReadoutService {

  DataChannel!          : BroadcastChannel;
  ComponentChannelName! : string;
  TargetName!           : string;

  private Readings : BehaviorSubject<BaseSizeAnalyzerInterface> = new BehaviorSubject<BaseSizeAnalyzerInterface>({
    fullWidth  : 0,
    baseWidth  : 0,
    chunkWidth : 0,
    sliceWidth : 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor() { }

  public updateReadings(readings: BaseSizeAnalyzerInterface): void{ this.Readings.next(readings); }

  
}
