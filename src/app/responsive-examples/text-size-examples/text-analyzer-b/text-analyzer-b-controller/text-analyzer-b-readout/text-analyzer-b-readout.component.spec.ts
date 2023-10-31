import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalyzerBReadoutComponent } from './text-analyzer-b-readout.component';

describe('TextAnalyzerBReadoutComponent', () => {
  let component: TextAnalyzerBReadoutComponent;
  let fixture: ComponentFixture<TextAnalyzerBReadoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextAnalyzerBReadoutComponent]
    });
    fixture = TestBed.createComponent(TextAnalyzerBReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
