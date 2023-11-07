import { TestBed } from '@angular/core/testing';

import { LeadingAnalyzerService } from './leading-analyzer.service';

describe('LeadingAnalyzerService', () => {
  let service: LeadingAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadingAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
