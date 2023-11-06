import { TestBed } from '@angular/core/testing';

import { KerningControllerService } from './kerning-controller.service';

describe('KerningControllerService', () => {
  let service: KerningControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KerningControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
