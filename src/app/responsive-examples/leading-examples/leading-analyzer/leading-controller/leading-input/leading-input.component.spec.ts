import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingInputComponent } from './leading-input.component';

describe('LeadingInputComponent', () => {
  let component: LeadingInputComponent;
  let fixture: ComponentFixture<LeadingInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadingInputComponent]
    });
    fixture = TestBed.createComponent(LeadingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
