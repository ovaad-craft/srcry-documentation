import { Injectable, NgZone } from '@angular/core';
import { SquishGrowthAnalyzerReadings, SquishGrowthData } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthAnalyzerControllerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<SquishGrowthAnalyzerReadings> = new BehaviorSubject<SquishGrowthAnalyzerReadings>({
    baseSizeW: 0,
    growthSizeW: 0,
    fullSizeW: 0,
    baseSizeH: 0,
    growthSizeH: 0,
    fullSizeH: 0
  });

  public Readings$ = this.Readings.asObservable();

  public DefaultSettings: SquishGrowthData = {
    squishGrowthWStart: '1px',
    squishGrowthWSpeed: 0,
    squishGrowthWMax: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    squishGrowthWMaxNudgeScale: 0,
    squishGrowthWMaxNudgeSlice: 0,
    squishGrowthHStart: '1px',
    squishGrowthHSpeed: 0,
    squishGrowthHMax: {
      size: 'micro',
      scale: '1',
      speed: '1'
    },
    squishGrowthHMaxNudgeScale: 0,
    squishGrowthHMaxNudgeSlice: 0
  };

  constructor(private zone: NgZone) { }
}
