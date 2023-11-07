import { TestBed } from '@angular/core/testing';

import { KerningAnalyzerService } from './kerning-analyzer.service';

describe('KerningAnalyzerService', () => {
  let service: KerningAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KerningAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
