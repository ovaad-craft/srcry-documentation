import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerControllerComponent } from './squish-growth-analyzer-controller.component';

describe('SquishGrowthAnalyzerControllerComponent', () => {
  let component: SquishGrowthAnalyzerControllerComponent;
  let fixture: ComponentFixture<SquishGrowthAnalyzerControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthAnalyzerControllerComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthAnalyzerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
