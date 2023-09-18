import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapExampleBComponent } from './crush-gap-example-b.component';

describe('CrushGapExampleBComponent', () => {
  let component: CrushGapExampleBComponent;
  let fixture: ComponentFixture<CrushGapExampleBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrushGapExampleBComponent]
    });
    fixture = TestBed.createComponent(CrushGapExampleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
