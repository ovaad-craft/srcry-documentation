import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KerningExampleAComponent } from './kerning-example-a.component';

describe('KerningExampleAComponent', () => {
  let component: KerningExampleAComponent;
  let fixture: ComponentFixture<KerningExampleAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [KerningExampleAComponent]
    });
    fixture = TestBed.createComponent(KerningExampleAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
