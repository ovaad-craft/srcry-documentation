import { TestBed } from '@angular/core/testing';

import { IntroductionPageService } from './introduction-page.service';

describe('IntroductionPageService', () => {
  let service: IntroductionPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntroductionPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
