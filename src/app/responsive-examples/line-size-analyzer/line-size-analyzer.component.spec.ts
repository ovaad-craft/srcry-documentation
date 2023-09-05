import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeAnalyzerComponent } from './line-size-analyzer.component';

describe('LineSizeAnalyzerComponent', () => {
  let component: LineSizeAnalyzerComponent;
  let fixture: ComponentFixture<LineSizeAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineSizeAnalyzerComponent]
    });
    fixture = TestBed.createComponent(LineSizeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
