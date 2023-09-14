import { TestBed } from '@angular/core/testing';

import { BaseSizeAnalyzerService } from './base-size-analyzer.service';

describe('BaseSizeAnalyzerService', () => {
  let service: BaseSizeAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizeAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
