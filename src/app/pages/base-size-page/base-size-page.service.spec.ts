import { TestBed } from '@angular/core/testing';

import { BaseSizePageService } from './base-size-page.service';

describe('BaseSizePageService', () => {
  let service: BaseSizePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseSizePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
