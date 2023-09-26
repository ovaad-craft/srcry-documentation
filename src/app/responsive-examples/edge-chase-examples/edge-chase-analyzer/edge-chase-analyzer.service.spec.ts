import { TestBed } from '@angular/core/testing';

import { EdgeChaseAnalyzerService } from './edge-chase-analyzer.service';

describe('EdgeChaseAnalyzerService', () => {
  let service: EdgeChaseAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeChaseAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
