import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizePageComponent } from './text-size-page.component';

describe('TextSizePageComponent', () => {
  let component: TextSizePageComponent;
  let fixture: ComponentFixture<TextSizePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextSizePageComponent]
    });
    fixture = TestBed.createComponent(TextSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
