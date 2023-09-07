import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeDemoAComponent } from './line-size-demo-a.component';

describe('LineSizeDemoAComponent', () => {
  let component: LineSizeDemoAComponent;
  let fixture: ComponentFixture<LineSizeDemoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineSizeDemoAComponent]
    });
    fixture = TestBed.createComponent(LineSizeDemoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
