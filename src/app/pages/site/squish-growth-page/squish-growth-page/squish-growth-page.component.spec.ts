import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquishGrowthPageComponent } from './squish-growth-page.component';

describe('SquishGrowthPageComponent', () => {
  let component: SquishGrowthPageComponent;
  let fixture: ComponentFixture<SquishGrowthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SquishGrowthPageComponent]
    });
    fixture = TestBed.createComponent(SquishGrowthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
