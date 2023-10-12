import { TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerService } from './squish-growth-analyzer.service';

describe('SquishGrowthAnalyzerService', () => {
  let service: SquishGrowthAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquishGrowthAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
