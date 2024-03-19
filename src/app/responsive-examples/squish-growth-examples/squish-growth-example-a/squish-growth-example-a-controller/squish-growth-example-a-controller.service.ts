import { Injectable } from '@angular/core';
import { SquishGrowthReadings } from '@site-types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquishGrowthExampleAControllerService {


  private Readings : BehaviorSubject<SquishGrowthReadings> = new BehaviorSubject<SquishGrowthReadings>({
    fullSize   : 0,
    baseSize   : 0,
    growthSize : 0
  });

  public Readings$ = this.Readings.asObservable();

  public updateReadings(readings: SquishGrowthReadings):void{
    this.Readings.next(readings);
  }
}
