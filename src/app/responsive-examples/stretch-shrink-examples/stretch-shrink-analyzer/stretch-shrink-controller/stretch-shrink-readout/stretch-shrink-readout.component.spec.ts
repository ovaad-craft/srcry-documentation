import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkReadoutComponent } from './stretch-shrink-readout.component';

describe('StretchShrinkReadoutComponent', () => {
  let component: StretchShrinkReadoutComponent;
  let fixture: ComponentFixture<StretchShrinkReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkReadoutComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
