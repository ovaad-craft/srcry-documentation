import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerReadoutComponent } from './squish-growth-analyzer-readout.component';

describe('SquishGrowthAnalyzerReadoutComponent', () => {
  let component: SquishGrowthAnalyzerReadoutComponent;
  let fixture: ComponentFixture<SquishGrowthAnalyzerReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthAnalyzerReadoutComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthAnalyzerReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
