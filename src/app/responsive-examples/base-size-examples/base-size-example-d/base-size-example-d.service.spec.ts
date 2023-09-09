import { TestBed } from '@angular/core/testing';

import { BaseSizeExampleDService } from './base-size-example-d.service';

describe('BaseSizeExampleDService', () => {
  let service: BaseSizeExampleDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizeExampleDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
