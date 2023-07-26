import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerningNudgeAmountPageComponent } from './kerning-nudge-amount-page.component';

describe('KerningNudgeAmountPageComponent', () => {
  let component: KerningNudgeAmountPageComponent;
  let fixture: ComponentFixture<KerningNudgeAmountPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KerningNudgeAmountPageComponent]
    });
    fixture = TestBed.createComponent(KerningNudgeAmountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
