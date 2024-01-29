import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandvouchersComponent } from './brandvouchers.component';

describe('BrandvouchersComponent', () => {
  let component: BrandvouchersComponent;
  let fixture: ComponentFixture<BrandvouchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandvouchersComponent]
    });
    fixture = TestBed.createComponent(BrandvouchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
