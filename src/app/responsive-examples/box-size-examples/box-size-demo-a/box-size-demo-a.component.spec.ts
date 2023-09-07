import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeDemoAComponent } from './box-size-demo-a.component';

describe('BoxSizeDemoAComponent', () => {
  let component: BoxSizeDemoAComponent;
  let fixture: ComponentFixture<BoxSizeDemoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxSizeDemoAComponent]
    });
    fixture = TestBed.createComponent(BoxSizeDemoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
