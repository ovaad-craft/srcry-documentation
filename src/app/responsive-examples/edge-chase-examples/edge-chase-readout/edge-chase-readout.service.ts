import { Injectable } from '@angular/core';
import { SrcryPropReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EdgeChaseReadoutService {

  private Readings : BehaviorSubject<SrcryPropReadings> = new BehaviorSubject<SrcryPropReadings>({
    activePropW : '--',
    activePropH : '--',
    width       : 0,
    height      : 0
  });
  public Readings$ = this.Readings.asObservable();

  public updateReadings(readings: SrcryPropReadings): void{
    this.Readings.next(readings);
  }
  
}
