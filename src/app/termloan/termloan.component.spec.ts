import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermloanComponent } from './termloan.component';

describe('TermloanComponent', () => {
  let component: TermloanComponent;
  let fixture: ComponentFixture<TermloanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermloanComponent]
    });
    fixture = TestBed.createComponent(TermloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
