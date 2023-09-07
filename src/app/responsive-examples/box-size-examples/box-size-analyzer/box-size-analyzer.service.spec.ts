import { TestBed } from '@angular/core/testing';

import { BoxSizeAnalyzerService } from './box-size-analyzer.service';

describe('BoxSizeAnalyzerService', () => {
  let service: BoxSizeAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxSizeAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
