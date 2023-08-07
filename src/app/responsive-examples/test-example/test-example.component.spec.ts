import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExampleComponent } from './test-example.component';

describe('TestExampleComponent', () => {
  let component: TestExampleComponent;
  let fixture: ComponentFixture<TestExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestExampleComponent]
    });
    fixture = TestBed.createComponent(TestExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
