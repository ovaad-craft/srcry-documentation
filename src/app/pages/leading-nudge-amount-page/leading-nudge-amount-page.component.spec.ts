import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingNudgeAmountPageComponent } from './leading-nudge-amount-page.component';

describe('LeadingNudgeAmountPageComponent', () => {
  let component: LeadingNudgeAmountPageComponent;
  let fixture: ComponentFixture<LeadingNudgeAmountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadingNudgeAmountPageComponent]
    });
    fixture = TestBed.createComponent(LeadingNudgeAmountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
