import { TestBed } from '@angular/core/testing';

import { StretchShrinkExampleAReadoutService } from './stretch-shrink-example-a-readout.service';

describe('StretchShrinkExampleAReadoutService', () => {
  let service: StretchShrinkExampleAReadoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StretchShrinkExampleAReadoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
