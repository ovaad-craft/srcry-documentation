import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseReadoutComponent } from './edge-chase-readout.component';

describe('EdgeChaseReadoutComponent', () => {
  let component: EdgeChaseReadoutComponent;
  let fixture: ComponentFixture<EdgeChaseReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChaseReadoutComponent]
    });
    fixture = TestBed.createComponent(EdgeChaseReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
