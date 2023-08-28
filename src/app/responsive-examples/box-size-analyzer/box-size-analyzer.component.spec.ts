import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeAnalyzerComponent } from './box-size-analyzer.component';

describe('BoxSizeAnalyzerComponent', () => {
  let component: BoxSizeAnalyzerComponent;
  let fixture: ComponentFixture<BoxSizeAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxSizeAnalyzerComponent]
    });
    fixture = TestBed.createComponent(BoxSizeAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
