import { TestBed } from '@angular/core/testing';

import { StretchShrinkAnalyzerService } from './stretch-shrink-analyzer.service';

describe('StretchShrinkAnalyzerService', () => {
  let service: StretchShrinkAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StretchShrinkAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
