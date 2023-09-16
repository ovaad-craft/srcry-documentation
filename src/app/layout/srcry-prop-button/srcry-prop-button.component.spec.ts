import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryPropButtonComponent } from './srcry-prop-button.component';

describe('SrcryPropButtonComponent', () => {
  let component: SrcryPropButtonComponent;
  let fixture: ComponentFixture<SrcryPropButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SrcryPropButtonComponent]
    });
    fixture = TestBed.createComponent(SrcryPropButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
