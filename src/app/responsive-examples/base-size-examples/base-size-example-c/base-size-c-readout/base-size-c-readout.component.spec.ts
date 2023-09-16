import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeCReadoutComponent } from './base-size-c-readout.component';

describe('BaseSizeCReadoutComponent', () => {
  let component: BaseSizeCReadoutComponent;
  let fixture: ComponentFixture<BaseSizeCReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeCReadoutComponent]
    });
    fixture = TestBed.createComponent(BaseSizeCReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
