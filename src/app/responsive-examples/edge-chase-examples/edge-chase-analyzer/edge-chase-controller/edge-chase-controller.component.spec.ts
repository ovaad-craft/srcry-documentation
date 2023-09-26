import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseControllerComponent } from './edge-chase-controller.component';

describe('EdgeChaseControllerComponent', () => {
  let component: EdgeChaseControllerComponent;
  let fixture: ComponentFixture<EdgeChaseControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChaseControllerComponent]
    });
    fixture = TestBed.createComponent(EdgeChaseControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
