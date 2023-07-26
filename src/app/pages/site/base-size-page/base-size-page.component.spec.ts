import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSizePageComponent } from './base-size-page.component';

describe('BaseSizePageComponent', () => {
  let component: BaseSizePageComponent;
  let fixture: ComponentFixture<BaseSizePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseSizePageComponent]
    });
    fixture = TestBed.createComponent(BaseSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
