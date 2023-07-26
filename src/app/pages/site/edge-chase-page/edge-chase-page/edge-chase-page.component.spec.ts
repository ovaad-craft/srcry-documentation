import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChasePageComponent } from './edge-chase-page.component';

describe('EdgeChasePageComponent', () => {
  let component: EdgeChasePageComponent;
  let fixture: ComponentFixture<EdgeChasePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChasePageComponent]
    });
    fixture = TestBed.createComponent(EdgeChasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
