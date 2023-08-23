import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSizeLibraryComponent } from './text-size-library.component';

describe('TextSizeLibraryComponent', () => {
  let component: TextSizeLibraryComponent;
  let fixture: ComponentFixture<TextSizeLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextSizeLibraryComponent]
    });
    fixture = TestBed.createComponent(TextSizeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
