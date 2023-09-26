import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseAnalyzerComponent } from './edge-chase-analyzer.component';

describe('EdgeChaseAnalyzerComponent', () => {
  let component: EdgeChaseAnalyzerComponent;
  let fixture: ComponentFixture<EdgeChaseAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChaseAnalyzerComponent]
    });
    fixture = TestBed.createComponent(EdgeChaseAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
