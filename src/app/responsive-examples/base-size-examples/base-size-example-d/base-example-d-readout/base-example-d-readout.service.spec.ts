import { TestBed } from '@angular/core/testing';

import { BaseExampleDReadoutService } from './base-example-d-readout.service';

describe('BaseExampleDReadoutService', () => {
  let service: BaseExampleDReadoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseExampleDReadoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
