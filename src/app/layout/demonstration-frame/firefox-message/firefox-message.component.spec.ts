import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirefoxMessageComponent } from './firefox-message.component';

describe('FirefoxMessageComponent', () => {
  let component: FirefoxMessageComponent;
  let fixture: ComponentFixture<FirefoxMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FirefoxMessageComponent]
    });
    fixture = TestBed.createComponent(FirefoxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
