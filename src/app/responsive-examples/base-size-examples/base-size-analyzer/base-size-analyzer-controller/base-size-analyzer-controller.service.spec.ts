import { TestBed } from '@angular/core/testing';

import { BaseSizeAnalyzerControllerService } from './base-size-analyzer-controller.service';

describe('BaseSizeAnalyzerControllerService', () => {
  let service: BaseSizeAnalyzerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizeAnalyzerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
