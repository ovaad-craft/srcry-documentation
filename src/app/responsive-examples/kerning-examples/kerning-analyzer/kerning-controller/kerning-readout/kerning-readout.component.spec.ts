import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerningReadoutComponent } from './kerning-readout.component';

describe('KerningReadoutComponent', () => {
  let component: KerningReadoutComponent;
  let fixture: ComponentFixture<KerningReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KerningReadoutComponent]
    });
    fixture = TestBed.createComponent(KerningReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
