import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeAnalyzerComponent } from './base-size-analyzer.component';

describe('BaseSizeAnalyzerComponent', () => {
  let component: BaseSizeAnalyzerComponent;
  let fixture: ComponentFixture<BaseSizeAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeAnalyzerComponent]
    });
    fixture = TestBed.createComponent(BaseSizeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
