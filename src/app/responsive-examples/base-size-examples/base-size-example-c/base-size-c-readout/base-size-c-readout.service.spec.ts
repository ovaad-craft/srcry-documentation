import { TestBed } from '@angular/core/testing';

import { BaseSizeCReadoutService } from './base-size-c-readout.service';

describe('BaseSizeCReadoutService', () => {
  let service: BaseSizeCReadoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizeCReadoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
