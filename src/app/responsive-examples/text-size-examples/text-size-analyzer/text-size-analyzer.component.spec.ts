import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizeAnalyzerComponent } from './text-size-analyzer.component';

describe('TextSizeAnalyzerComponent', () => {
  let component: TextSizeAnalyzerComponent;
  let fixture: ComponentFixture<TextSizeAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextSizeAnalyzerComponent]
    });
    fixture = TestBed.createComponent(TextSizeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
