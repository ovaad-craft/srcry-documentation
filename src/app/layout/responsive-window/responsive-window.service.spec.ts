import { TestBed } from '@angular/core/testing';

import { ResponsiveWindowService } from './responsive-window.service';

describe('ResponsiveWindowService', () => {
  let service: ResponsiveWindowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveWindowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
