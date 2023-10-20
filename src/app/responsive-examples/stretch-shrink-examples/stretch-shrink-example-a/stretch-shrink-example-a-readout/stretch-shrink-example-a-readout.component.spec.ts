import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkExampleAReadoutComponent } from './stretch-shrink-example-a-readout.component';

describe('StretchShrinkExampleAReadoutComponent', () => {
  let component: StretchShrinkExampleAReadoutComponent;
  let fixture: ComponentFixture<StretchShrinkExampleAReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkExampleAReadoutComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkExampleAReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
