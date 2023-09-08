import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeExampleBComponent } from './base-size-example-b.component';

describe('BaseSizeExampleBComponent', () => {
  let component: BaseSizeExampleBComponent;
  let fixture: ComponentFixture<BaseSizeExampleBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeExampleBComponent]
    });
    fixture = TestBed.createComponent(BaseSizeExampleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
