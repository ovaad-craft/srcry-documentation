import { Injectable } from '@angular/core';
import { SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseAnalyzerService {

  private DataChannel!: BroadcastChannel;
  private ChannelName!: string;
  private TargetName!: string;

  private Readings: BehaviorSubject<SrcryPropReadings> = new BehaviorSubject<SrcryPropReadings>({
    activePropW: '--',
    activePropH: '--',
    width: 0,
    height: 0
  });

  public Readings$ = this.Readings.asObservable();

  constructor() { }
}
