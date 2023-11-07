import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingAnalyzerComponent } from './leading-analyzer.component';

describe('LeadingAnalyzerComponent', () => {
  let component: LeadingAnalyzerComponent;
  let fixture: ComponentFixture<LeadingAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadingAnalyzerComponent]
    });
    fixture = TestBed.createComponent(LeadingAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
