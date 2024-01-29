import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensecardComponent } from './expensecard.component';

describe('ExpensecardComponent', () => {
  let component: ExpensecardComponent;
  let fixture: ComponentFixture<ExpensecardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensecardComponent]
    });
    fixture = TestBed.createComponent(ExpensecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
