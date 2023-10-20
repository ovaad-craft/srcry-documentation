import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchShrinkExampleAComponent } from './stretch-shrink-example-a.component';

describe('StretchShrinkExampleAComponent', () => {
  let component: StretchShrinkExampleAComponent;
  let fixture: ComponentFixture<StretchShrinkExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StretchShrinkExampleAComponent]
    });
    fixture = TestBed.createComponent(StretchShrinkExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
