import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeDemoBComponent } from './box-size-demo-b.component';

describe('BoxSizeDemoBComponent', () => {
  let component: BoxSizeDemoBComponent;
  let fixture: ComponentFixture<BoxSizeDemoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxSizeDemoBComponent]
    });
    fixture = TestBed.createComponent(BoxSizeDemoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
