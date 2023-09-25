import { TestBed } from '@angular/core/testing';

import { EdgeChaseReadoutService } from './edge-chase-readout.service';

describe('EdgeChaseReadoutService', () => {
  let service: EdgeChaseReadoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeChaseReadoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
