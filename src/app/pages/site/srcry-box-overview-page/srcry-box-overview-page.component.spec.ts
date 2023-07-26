import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrcryBoxOverviewPageComponent } from './srcry-box-overview-page.component';

describe('SrcryBoxOverviewPageComponent', () => {
  let component: SrcryBoxOverviewPageComponent;
  let fixture: ComponentFixture<SrcryBoxOverviewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SrcryBoxOverviewPageComponent]
    });
    fixture = TestBed.createComponent(SrcryBoxOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
