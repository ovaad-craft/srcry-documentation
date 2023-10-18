import { TestBed } from '@angular/core/testing';

import { StretchShrinkControllerService } from './stretch-shrink-controller.service';

describe('StretchShrinkControllerService', () => {
  let service: StretchShrinkControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StretchShrinkControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
