import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitypaymentsComponent } from './utilitypayments.component';

describe('UtilitypaymentsComponent', () => {
  let component: UtilitypaymentsComponent;
  let fixture: ComponentFixture<UtilitypaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtilitypaymentsComponent]
    });
    fixture = TestBed.createComponent(UtilitypaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
