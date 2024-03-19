import { TestBed } from '@angular/core/testing';

import { StretchShrinkPageService } from './stretch-shrink-page.service';

describe('StretchShrinkPageService', () => {
  let service: StretchShrinkPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StretchShrinkPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
