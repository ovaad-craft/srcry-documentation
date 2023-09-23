import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrushGapExampleAComponent } from './crush-gap-example-a.component';

describe('CrushGapExampleAComponent', () => {
  let component: CrushGapExampleAComponent;
  let fixture: ComponentFixture<CrushGapExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CrushGapExampleAComponent]
    });
    fixture = TestBed.createComponent(CrushGapExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
