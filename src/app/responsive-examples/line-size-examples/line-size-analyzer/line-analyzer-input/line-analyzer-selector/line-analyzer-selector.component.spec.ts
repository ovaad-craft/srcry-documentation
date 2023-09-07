import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAnalyzerSelectorComponent } from './line-analyzer-selector.component';

describe('LineAnalyzerSelectorComponent', () => {
  let component: LineAnalyzerSelectorComponent;
  let fixture: ComponentFixture<LineAnalyzerSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineAnalyzerSelectorComponent]
    });
    fixture = TestBed.createComponent(LineAnalyzerSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
