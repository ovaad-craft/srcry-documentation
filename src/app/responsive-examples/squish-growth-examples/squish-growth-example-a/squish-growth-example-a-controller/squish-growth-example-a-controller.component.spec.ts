import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthExampleAControllerComponent } from './squish-growth-example-a-controller.component';

describe('SquishGrowthExampleAControllerComponent', () => {
  let component: SquishGrowthExampleAControllerComponent;
  let fixture: ComponentFixture<SquishGrowthExampleAControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthExampleAControllerComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthExampleAControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
