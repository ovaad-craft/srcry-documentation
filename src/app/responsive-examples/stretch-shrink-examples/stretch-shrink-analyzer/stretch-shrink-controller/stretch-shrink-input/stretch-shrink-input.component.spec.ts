import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkInputComponent } from './stretch-shrink-input.component';

describe('StretchShrinkInputComponent', () => {
  let component: StretchShrinkInputComponent;
  let fixture: ComponentFixture<StretchShrinkInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkInputComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
