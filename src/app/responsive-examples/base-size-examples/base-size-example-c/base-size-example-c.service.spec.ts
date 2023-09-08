import { TestBed } from '@angular/core/testing';

import { BaseSizeExampleCService } from './base-size-example-c.service';

describe('BaseSizeExampleCService', () => {
  let service: BaseSizeExampleCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizeExampleCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
