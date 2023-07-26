import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BleedPageComponent } from './bleed-page.component';

describe('BleedPageComponent', () => {
  let component: BleedPageComponent;
  let fixture: ComponentFixture<BleedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BleedPageComponent]
    });
    fixture = TestBed.createComponent(BleedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
