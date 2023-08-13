import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrationFrameComponent } from './demonstration-frame.component';

describe('DemonstrationFrameComponent', () => {
  let component: DemonstrationFrameComponent;
  let fixture: ComponentFixture<DemonstrationFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DemonstrationFrameComponent]
    });
    fixture = TestBed.createComponent(DemonstrationFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
