import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeInputComponent } from './base-size-input.component';

describe('BaseSizeInputComponent', () => {
  let component: BaseSizeInputComponent;
  let fixture: ComponentFixture<BaseSizeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeInputComponent]
    });
    fixture = TestBed.createComponent(BaseSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
