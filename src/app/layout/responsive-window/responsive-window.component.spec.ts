import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWindowComponent } from './responsive-window.component';

describe('ResponsiveWindowComponent', () => {
  let component: ResponsiveWindowComponent;
  let fixture: ComponentFixture<ResponsiveWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ResponsiveWindowComponent]
    });
    fixture = TestBed.createComponent(ResponsiveWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
