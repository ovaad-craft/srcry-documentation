import { TestBed } from '@angular/core/testing';

import { EdgeChasePageService } from './edge-chase-page.service';

describe('EdgeChasePageService', () => {
  let service: EdgeChasePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeChasePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
