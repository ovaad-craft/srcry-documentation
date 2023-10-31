import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizeAnalyzerBInputComponent } from './text-size-analyzer-b-input.component';

describe('TextSizeAnalyzerBInputComponent', () => {
  let component: TextSizeAnalyzerBInputComponent;
  let fixture: ComponentFixture<TextSizeAnalyzerBInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextSizeAnalyzerBInputComponent]
    });
    fixture = TestBed.createComponent(TextSizeAnalyzerBInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
