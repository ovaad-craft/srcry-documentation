import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaseStopPageComponent } from './chase-stop-page.component';

describe('ChaseStopPageComponent', () => {
  let component: ChaseStopPageComponent;
  let fixture: ComponentFixture<ChaseStopPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChaseStopPageComponent]
    });
    fixture = TestBed.createComponent(ChaseStopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
