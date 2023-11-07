import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadingExampleAComponent } from './leading-example-a.component';

describe('LeadingExampleAComponent', () => {
  let component: LeadingExampleAComponent;
  let fixture: ComponentFixture<LeadingExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LeadingExampleAComponent]
    });
    fixture = TestBed.createComponent(LeadingExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
