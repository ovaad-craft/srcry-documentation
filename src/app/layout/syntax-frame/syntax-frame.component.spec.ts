import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyntaxFrameComponent } from './syntax-frame.component';

describe('SyntaxFrameComponent', () => {
  let component: SyntaxFrameComponent;
  let fixture: ComponentFixture<SyntaxFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SyntaxFrameComponent]
    });
    fixture = TestBed.createComponent(SyntaxFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
