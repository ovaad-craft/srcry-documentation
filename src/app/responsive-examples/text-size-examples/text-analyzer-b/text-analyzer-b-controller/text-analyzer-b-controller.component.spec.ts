import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerBControllerComponent } from './text-analyzer-b-controller.component';

describe('TextAnalyzerBControllerComponent', () => {
  let component: TextAnalyzerBControllerComponent;
  let fixture: ComponentFixture<TextAnalyzerBControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextAnalyzerBControllerComponent]
    });
    fixture = TestBed.createComponent(TextAnalyzerBControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
