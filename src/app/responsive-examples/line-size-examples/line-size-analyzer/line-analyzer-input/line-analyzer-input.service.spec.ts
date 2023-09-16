import { TestBed } from '@angular/core/testing';

import { LineAnalyzerInputService } from './line-analyzer-input.service';

describe('LineAnalyzerInputService', () => {
  let service: LineAnalyzerInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineAnalyzerInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
