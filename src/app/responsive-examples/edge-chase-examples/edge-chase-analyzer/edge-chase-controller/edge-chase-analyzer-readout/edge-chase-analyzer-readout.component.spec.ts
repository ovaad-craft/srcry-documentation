import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseAnalyzerReadoutComponent } from './edge-chase-analyzer-readout.component';

describe('EdgeChaseAnalyzerReadoutComponent', () => {
  let component: EdgeChaseAnalyzerReadoutComponent;
  let fixture: ComponentFixture<EdgeChaseAnalyzerReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChaseAnalyzerReadoutComponent]
    });
    fixture = TestBed.createComponent(EdgeChaseAnalyzerReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
