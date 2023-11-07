import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingReadoutComponent } from './leading-readout.component';

describe('LeadingReadoutComponent', () => {
  let component: LeadingReadoutComponent;
  let fixture: ComponentFixture<LeadingReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadingReadoutComponent]
    });
    fixture = TestBed.createComponent(LeadingReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
