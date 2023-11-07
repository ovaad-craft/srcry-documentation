import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerningAnalyzerComponent } from './kerning-analyzer.component';

describe('KerningAnalyzerComponent', () => {
  let component: KerningAnalyzerComponent;
  let fixture: ComponentFixture<KerningAnalyzerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KerningAnalyzerComponent]
    });
    fixture = TestBed.createComponent(KerningAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
