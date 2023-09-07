import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizeDemoAComponent } from './text-size-demo-a.component';

describe('TextSizeDemoAComponent', () => {
  let component: TextSizeDemoAComponent;
  let fixture: ComponentFixture<TextSizeDemoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextSizeDemoAComponent]
    });
    fixture = TestBed.createComponent(TextSizeDemoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
