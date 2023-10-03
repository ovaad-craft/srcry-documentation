import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseInputComponent } from './edge-chase-input.component';

describe('EdgeChaseInputComponent', () => {
  let component: EdgeChaseInputComponent;
  let fixture: ComponentFixture<EdgeChaseInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChaseInputComponent]
    });
    fixture = TestBed.createComponent(EdgeChaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
