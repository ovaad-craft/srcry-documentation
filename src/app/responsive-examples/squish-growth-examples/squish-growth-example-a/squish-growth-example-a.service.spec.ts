import { TestBed } from '@angular/core/testing';

import { SquishGrowthExampleAService } from './squish-growth-example-a.service';

describe('SquishGrowthExampleAService', () => {
  let service: SquishGrowthExampleAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquishGrowthExampleAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
