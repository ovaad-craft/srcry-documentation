import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropDisplayComponent } from './prop-display.component';

describe('PropDisplayComponent', () => {
  let component: PropDisplayComponent;
  let fixture: ComponentFixture<PropDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropDisplayComponent]
    });
    fixture = TestBed.createComponent(PropDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
