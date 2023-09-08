import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeExampleCComponent } from './base-size-example-c.component';

describe('BaseSizeExampleCComponent', () => {
  let component: BaseSizeExampleCComponent;
  let fixture: ComponentFixture<BaseSizeExampleCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeExampleCComponent]
    });
    fixture = TestBed.createComponent(BaseSizeExampleCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
