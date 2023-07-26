import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkPageComponent } from './stretch-shrink-page.component';

describe('StretchShrinkPageComponent', () => {
  let component: StretchShrinkPageComponent;
  let fixture: ComponentFixture<StretchShrinkPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkPageComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
