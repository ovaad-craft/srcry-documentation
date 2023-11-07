import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerningInputComponent } from './kerning-input.component';

describe('KerningInputComponent', () => {
  let component: KerningInputComponent;
  let fixture: ComponentFixture<KerningInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KerningInputComponent]
    });
    fixture = TestBed.createComponent(KerningInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
