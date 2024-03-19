import { TestBed } from '@angular/core/testing';

import { CrushGapPageService } from './crush-gap-page.service';

describe('CrushGapPageService', () => {
  let service: CrushGapPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrushGapPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
