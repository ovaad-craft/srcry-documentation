import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerSelectorComponent } from './text-analyzer-selector.component';

describe('TextAnalyzerSelectorComponent', () => {
  let component: TextAnalyzerSelectorComponent;
  let fixture: ComponentFixture<TextAnalyzerSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextAnalyzerSelectorComponent]
    });
    fixture = TestBed.createComponent(TextAnalyzerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
