import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSizeLibraryComponent } from './line-size-library.component';

describe('LineSizeLibraryComponent', () => {
  let component: LineSizeLibraryComponent;
  let fixture: ComponentFixture<LineSizeLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LineSizeLibraryComponent]
    });
    fixture = TestBed.createComponent(LineSizeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
