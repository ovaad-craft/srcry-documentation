import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeExampleAComponent } from './base-size-example-a.component';

describe('BaseSizeExampleAComponent', () => {
  let component: BaseSizeExampleAComponent;
  let fixture: ComponentFixture<BaseSizeExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeExampleAComponent]
    });
    fixture = TestBed.createComponent(BaseSizeExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
