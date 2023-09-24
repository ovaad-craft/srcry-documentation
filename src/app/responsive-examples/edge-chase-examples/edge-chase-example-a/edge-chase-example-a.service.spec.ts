import { TestBed } from '@angular/core/testing';

import { EdgeChaseExampleAService } from './edge-chase-example-a.service';

describe('EdgeChaseExampleAService', () => {
  let service: EdgeChaseExampleAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeChaseExampleAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
