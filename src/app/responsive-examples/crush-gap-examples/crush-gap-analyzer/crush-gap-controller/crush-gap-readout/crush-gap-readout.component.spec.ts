import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapReadoutComponent } from './crush-gap-readout.component';

describe('CrushGapReadoutComponent', () => {
  let component: CrushGapReadoutComponent;
  let fixture: ComponentFixture<CrushGapReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrushGapReadoutComponent]
    });
    fixture = TestBed.createComponent(CrushGapReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
