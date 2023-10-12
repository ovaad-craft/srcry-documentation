import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerComponent } from './squish-growth-analyzer.component';

describe('SquishGrowthAnalyzerComponent', () => {
  let component: SquishGrowthAnalyzerComponent;
  let fixture: ComponentFixture<SquishGrowthAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthAnalyzerComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
