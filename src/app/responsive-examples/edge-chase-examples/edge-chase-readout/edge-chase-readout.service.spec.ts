import { TestBed } from '@angular/core/testing';

import { EdgeChaseReadoutServiceTsService } from './edge-chase-readout.service.ts.service';

describe('EdgeChaseReadoutServiceTsService', () => {
  let service: EdgeChaseReadoutServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeChaseReadoutServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
