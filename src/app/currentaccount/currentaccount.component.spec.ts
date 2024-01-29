import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentaccountComponent } from './currentaccount.component';

describe('CurrentaccountComponent', () => {
  let component: CurrentaccountComponent;
  let fixture: ComponentFixture<CurrentaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentaccountComponent]
    });
    fixture = TestBed.createComponent(CurrentaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
