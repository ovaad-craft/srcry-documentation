import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkAnalyzerComponent } from './stretch-shrink-analyzer.component';

describe('StretchShrinkAnalyzerComponent', () => {
  let component: StretchShrinkAnalyzerComponent;
  let fixture: ComponentFixture<StretchShrinkAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkAnalyzerComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
