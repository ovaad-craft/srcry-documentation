import { TestBed } from '@angular/core/testing';

import { LineSizeAnalyzerService } from './line-size-analyzer.service';

describe('LineSizeAnalyzerService', () => {
  let service: LineSizeAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineSizeAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
