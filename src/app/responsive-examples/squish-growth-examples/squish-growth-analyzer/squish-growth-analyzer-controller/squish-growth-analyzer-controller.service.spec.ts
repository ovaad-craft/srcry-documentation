import { TestBed } from '@angular/core/testing';

import { SquishGrowthAnalyzerControllerService } from './squish-growth-analyzer-controller.service';

describe('SquishGrowthAnalyzerControllerService', () => {
  let service: SquishGrowthAnalyzerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquishGrowthAnalyzerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
