import { TestBed } from '@angular/core/testing';

import { LineAnalyzerSelectorService } from './line-analyzer-selector.service';

describe('LineAnalyzerSelectorService', () => {
  let service: LineAnalyzerSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineAnalyzerSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
