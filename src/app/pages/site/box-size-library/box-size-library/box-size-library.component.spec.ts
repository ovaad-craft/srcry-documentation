import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSizeLibraryComponent } from './box-size-library.component';

describe('BoxSizeLibraryComponent', () => {
  let component: BoxSizeLibraryComponent;
  let fixture: ComponentFixture<BoxSizeLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoxSizeLibraryComponent]
    });
    fixture = TestBed.createComponent(BoxSizeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
