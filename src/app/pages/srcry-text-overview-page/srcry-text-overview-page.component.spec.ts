import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryTextOverviewPageComponent } from './srcry-text-overview-page.component';

describe('SrcryTextOverviewPageComponent', () => {
  let component: SrcryTextOverviewPageComponent;
  let fixture: ComponentFixture<SrcryTextOverviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SrcryTextOverviewPageComponent]
    });
    fixture = TestBed.createComponent(SrcryTextOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
