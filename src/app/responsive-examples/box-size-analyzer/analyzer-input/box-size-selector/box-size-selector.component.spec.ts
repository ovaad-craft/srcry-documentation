import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeSelectorComponent } from './box-size-selector.component';

describe('BoxSizeSelectorComponent', () => {
  let component: BoxSizeSelectorComponent;
  let fixture: ComponentFixture<BoxSizeSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxSizeSelectorComponent]
    });
    fixture = TestBed.createComponent(BoxSizeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
