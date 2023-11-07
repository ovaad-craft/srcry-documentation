import { TestBed } from '@angular/core/testing';

import { LeadingControllerService } from './leading-controller.service';

describe('LeadingControllerService', () => {
  let service: LeadingControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadingControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
