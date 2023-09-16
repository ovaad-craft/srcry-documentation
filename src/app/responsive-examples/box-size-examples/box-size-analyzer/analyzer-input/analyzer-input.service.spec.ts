import { TestBed } from '@angular/core/testing';

import { AnalyzerInputService } from './analyzer-input.service';

describe('AnalyzerInputService', () => {
  let service: AnalyzerInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyzerInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
