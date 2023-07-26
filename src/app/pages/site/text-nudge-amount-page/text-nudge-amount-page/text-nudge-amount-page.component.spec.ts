import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNudgeAmountPageComponent } from './text-nudge-amount-page.component';

describe('TextNudgeAmountPageComponent', () => {
  let component: TextNudgeAmountPageComponent;
  let fixture: ComponentFixture<TextNudgeAmountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextNudgeAmountPageComponent]
    });
    fixture = TestBed.createComponent(TextNudgeAmountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
