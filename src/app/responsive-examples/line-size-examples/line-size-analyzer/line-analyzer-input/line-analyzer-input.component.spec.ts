import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAnalyzerInputComponent } from './line-analyzer-input.component';

describe('LineAnalyzerInputComponent', () => {
  let component: LineAnalyzerInputComponent;
  let fixture: ComponentFixture<LineAnalyzerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineAnalyzerInputComponent]
    });
    fixture = TestBed.createComponent(LineAnalyzerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
