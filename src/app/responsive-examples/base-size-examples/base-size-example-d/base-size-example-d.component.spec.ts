import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizeExampleDComponent } from './base-size-example-d.component';

describe('BaseSizeExampleDComponent', () => {
  let component: BaseSizeExampleDComponent;
  let fixture: ComponentFixture<BaseSizeExampleDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizeExampleDComponent]
    });
    fixture = TestBed.createComponent(BaseSizeExampleDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
