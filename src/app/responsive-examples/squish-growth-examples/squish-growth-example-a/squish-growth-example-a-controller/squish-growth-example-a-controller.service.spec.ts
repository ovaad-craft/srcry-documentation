import { TestBed } from '@angular/core/testing';

import { SquishGrowthExampleAControllerService } from './squish-growth-example-a-controller.service';

describe('SquishGrowthExampleAControllerService', () => {
  let service: SquishGrowthExampleAControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquishGrowthExampleAControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
