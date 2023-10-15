import { TestBed } from '@angular/core/testing';

import { StretchShrinkExampleAService } from './stretch-shrink-example-a.service';

describe('StretchShrinkExampleAService', () => {
  let service: StretchShrinkExampleAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StretchShrinkExampleAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
