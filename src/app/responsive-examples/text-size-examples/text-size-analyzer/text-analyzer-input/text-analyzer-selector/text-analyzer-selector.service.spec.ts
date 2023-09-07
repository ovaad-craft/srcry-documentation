import { TestBed } from '@angular/core/testing';

import { TextAnalyzerSelectorService } from './text-analyzer-selector.service';

describe('TextAnalyzerSelectorService', () => {
  let service: TextAnalyzerSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzerSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
