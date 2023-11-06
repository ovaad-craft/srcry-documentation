import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerningControllerComponent } from './kerning-controller.component';

describe('KerningControllerComponent', () => {
  let component: KerningControllerComponent;
  let fixture: ComponentFixture<KerningControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KerningControllerComponent]
    });
    fixture = TestBed.createComponent(KerningControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
