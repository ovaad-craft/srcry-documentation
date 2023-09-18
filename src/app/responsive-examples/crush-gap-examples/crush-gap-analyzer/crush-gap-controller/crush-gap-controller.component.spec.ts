import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapControllerComponent } from './crush-gap-controller.component';

describe('CrushGapControllerComponent', () => {
  let component: CrushGapControllerComponent;
  let fixture: ComponentFixture<CrushGapControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrushGapControllerComponent]
    });
    fixture = TestBed.createComponent(CrushGapControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
