import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutslinksComponent } from './payoutslinks.component';

describe('PayoutslinksComponent', () => {
  let component: PayoutslinksComponent;
  let fixture: ComponentFixture<PayoutslinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayoutslinksComponent]
    });
    fixture = TestBed.createComponent(PayoutslinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
