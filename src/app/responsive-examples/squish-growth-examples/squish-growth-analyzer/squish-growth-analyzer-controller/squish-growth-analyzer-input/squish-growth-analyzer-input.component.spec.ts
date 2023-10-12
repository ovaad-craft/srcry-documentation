import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerInputComponent } from './squish-growth-analyzer-input.component';

describe('SquishGrowthAnalyzerInputComponent', () => {
  let component: SquishGrowthAnalyzerInputComponent;
  let fixture: ComponentFixture<SquishGrowthAnalyzerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthAnalyzerInputComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthAnalyzerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
