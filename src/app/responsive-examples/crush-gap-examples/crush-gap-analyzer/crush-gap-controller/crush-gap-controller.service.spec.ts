import { TestBed } from '@angular/core/testing';

import { CrushGapControllerService } from './crush-gap-controller.service';

describe('CrushGapControllerService', () => {
  let service: CrushGapControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrushGapControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
