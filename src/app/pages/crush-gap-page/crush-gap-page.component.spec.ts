import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapPageComponent } from './crush-gap-page.component';

describe('CrushGapPageComponent', () => {
  let component: CrushGapPageComponent;
  let fixture: ComponentFixture<CrushGapPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrushGapPageComponent]
    });
    fixture = TestBed.createComponent(CrushGapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
