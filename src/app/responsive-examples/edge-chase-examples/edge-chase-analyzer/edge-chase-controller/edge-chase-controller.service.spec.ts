import { TestBed } from '@angular/core/testing';

import { EdgeChaseControllerService } from './edge-chase-controller.service';

describe('EdgeChaseControllerService', () => {
  let service: EdgeChaseControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdgeChaseControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
