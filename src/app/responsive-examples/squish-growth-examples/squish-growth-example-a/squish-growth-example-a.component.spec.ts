import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthExampleAComponent } from './squish-growth-example-a.component';

describe('SquishGrowthExampleAComponent', () => {
  let component: SquishGrowthExampleAComponent;
  let fixture: ComponentFixture<SquishGrowthExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthExampleAComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
