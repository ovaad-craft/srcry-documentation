import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseExampleDReadoutComponent } from './base-example-d-readout.component';

describe('BaseExampleDReadoutComponent', () => {
  let component: BaseExampleDReadoutComponent;
  let fixture: ComponentFixture<BaseExampleDReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseExampleDReadoutComponent]
    });
    fixture = TestBed.createComponent(BaseExampleDReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
