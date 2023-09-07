import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerInputComponent } from './text-analyzer-input.component';

describe('TextSizeAnalyzerComponent', () => {
  let component: TextAnalyzerInputComponent;
  let fixture: ComponentFixture<TextAnalyzerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextAnalyzerInputComponent]
    });
    fixture = TestBed.createComponent(TextAnalyzerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
