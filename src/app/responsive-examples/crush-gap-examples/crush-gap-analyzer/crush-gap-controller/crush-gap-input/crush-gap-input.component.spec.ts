import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapInputComponent } from './crush-gap-input.component';

describe('CrushGapInputComponent', () => {
  let component: CrushGapInputComponent;
  let fixture: ComponentFixture<CrushGapInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrushGapInputComponent]
    });
    fixture = TestBed.createComponent(CrushGapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
