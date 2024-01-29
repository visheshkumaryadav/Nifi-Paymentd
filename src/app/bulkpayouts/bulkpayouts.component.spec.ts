import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkpayoutsComponent } from './bulkpayouts.component';

describe('BulkpayoutsComponent', () => {
  let component: BulkpayoutsComponent;
  let fixture: ComponentFixture<BulkpayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkpayoutsComponent]
    });
    fixture = TestBed.createComponent(BulkpayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
