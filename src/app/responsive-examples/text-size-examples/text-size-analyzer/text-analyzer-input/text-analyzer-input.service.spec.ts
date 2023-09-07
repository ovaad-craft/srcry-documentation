import { TestBed } from '@angular/core/testing';

import { TextAnalyzerInputService } from './text-analyzer-input.service';

describe('TextSizeAnalyzerService', () => {
  let service: TextAnalyzerInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzerInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
