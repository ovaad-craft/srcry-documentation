import { TestBed } from '@angular/core/testing';

import { TextAnalyzerBControllerService } from './text-analyzer-b-controller.service';

describe('TextAnalyzerBControllerService', () => {
  let service: TextAnalyzerBControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzerBControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
