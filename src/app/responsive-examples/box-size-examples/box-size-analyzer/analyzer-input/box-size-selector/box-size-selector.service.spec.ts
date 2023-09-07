import { TestBed } from '@angular/core/testing';

import { BoxSizeSelectorService } from './box-size-selector.service';

describe('BoxSizeSelectorService', () => {
  let service: BoxSizeSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxSizeSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
