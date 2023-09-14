import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeAnalyzerControllerComponent } from './base-size-analyzer-controller.component';

describe('BaseSizeAnalyzerControllerComponent', () => {
  let component: BaseSizeAnalyzerControllerComponent;
  let fixture: ComponentFixture<BaseSizeAnalyzerControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeAnalyzerControllerComponent]
    });
    fixture = TestBed.createComponent(BaseSizeAnalyzerControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
