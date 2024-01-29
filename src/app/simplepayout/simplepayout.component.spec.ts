import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplepayoutComponent } from './simplepayout.component';

describe('SimplepayoutComponent', () => {
  let component: SimplepayoutComponent;
  let fixture: ComponentFixture<SimplepayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimplepayoutComponent]
    });
    fixture = TestBed.createComponent(SimplepayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
