import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropChartComponent } from './prop-chart.component';

describe('PropChartComponent', () => {
  let component: PropChartComponent;
  let fixture: ComponentFixture<PropChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropChartComponent]
    });
    fixture = TestBed.createComponent(PropChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
