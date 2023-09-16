import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerInputComponent } from './analyzer-input.component';

describe('AnalyzerInputComponent', () => {
  let component: AnalyzerInputComponent;
  let fixture: ComponentFixture<AnalyzerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnalyzerInputComponent]
    });
    fixture = TestBed.createComponent(AnalyzerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
