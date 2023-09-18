import { TestBed } from '@angular/core/testing';

import { CrushGapAnalyzerService } from './crush-gap-analyzer.service';

describe('CrushGapAnalyzerService', () => {
  let service: CrushGapAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrushGapAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
