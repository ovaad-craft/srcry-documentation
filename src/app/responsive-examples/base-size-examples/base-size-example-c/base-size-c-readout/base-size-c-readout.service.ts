import { Injectable, NgZone } from '@angular/core';
import { BaseSizeAnalyzerInterface } from '@site-types';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseSizeCReadoutService {

  private DataChannel!          : BroadcastChannel;
  private ComponentChannelName! : string;
  private TargetName!           : string;

  private Readings : BehaviorSubject<BaseSizeAnalyzerInterface> = new BehaviorSubject<BaseSizeAnalyzerInterface>({
    fullWidth  : 0,
    baseWidth  : 0,
    chunkWidth : 0,
    sliceWidth : 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor() { }

  public updateSettings(settings: BaseSizeAnalyzerInterface): void{ this.Readings.next(settings); }

}
