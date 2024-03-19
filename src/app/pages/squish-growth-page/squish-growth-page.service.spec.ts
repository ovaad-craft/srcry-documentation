import { TestBed } from '@angular/core/testing';

import { SquishGrowthPageService } from './squish-growth-page.service';

describe('SquishGrowthPageService', () => {
  let service: SquishGrowthPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquishGrowthPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
