import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerBComponent } from './text-analyzer-b.component';

describe('TextAnalyzerBComponent', () => {
  let component: TextAnalyzerBComponent;
  let fixture: ComponentFixture<TextAnalyzerBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextAnalyzerBComponent]
    });
    fixture = TestBed.createComponent(TextAnalyzerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
