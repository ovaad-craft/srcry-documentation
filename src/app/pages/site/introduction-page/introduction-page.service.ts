import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntroductionPageService {
  HeroHeight$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  HeroHeight = this.HeroHeight$.asObservable();

  public setHeroHeight(height: number): void{
    this.HeroHeight$.next(height);
  }

  constructor() { }
}
