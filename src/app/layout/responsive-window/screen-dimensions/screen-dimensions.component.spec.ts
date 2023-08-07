import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDimensionsComponent } from './screen-dimensions.component';

describe('ScreenDimensionsComponent', () => {
  let component: ScreenDimensionsComponent;
  let fixture: ComponentFixture<ScreenDimensionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScreenDimensionsComponent]
    });
    fixture = TestBed.createComponent(ScreenDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
