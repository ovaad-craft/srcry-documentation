import { TestBed } from '@angular/core/testing';

import { TextAnalyzerBService } from './text-analyzer-b.service';

describe('TextAnalyzerBService', () => {
  let service: TextAnalyzerBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzerBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
