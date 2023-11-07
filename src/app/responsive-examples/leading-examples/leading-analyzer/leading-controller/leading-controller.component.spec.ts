import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingControllerComponent } from './leading-controller.component';

describe('LeadingControllerComponent', () => {
  let component: LeadingControllerComponent;
  let fixture: ComponentFixture<LeadingControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadingControllerComponent]
    });
    fixture = TestBed.createComponent(LeadingControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
