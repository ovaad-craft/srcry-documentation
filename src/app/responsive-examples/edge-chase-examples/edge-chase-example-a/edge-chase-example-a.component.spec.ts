import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeChaseExampleAComponent } from './edge-chase-example-a.component';

describe('EdgeChaseExampleAComponent', () => {
  let component: EdgeChaseExampleAComponent;
  let fixture: ComponentFixture<EdgeChaseExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EdgeChaseExampleAComponent]
    });
    fixture = TestBed.createComponent(EdgeChaseExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
