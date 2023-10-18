import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkControllerComponent } from './stretch-shrink-controller.component';

describe('StretchShrinkControllerComponent', () => {
  let component: StretchShrinkControllerComponent;
  let fixture: ComponentFixture<StretchShrinkControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkControllerComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
