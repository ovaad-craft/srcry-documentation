import { TestBed } from '@angular/core/testing';

import { TextSizeAnalyzerService } from './text-size-analyzer.service';

describe('TextSizeAnalyzerService', () => {
  let service: TextSizeAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSizeAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
