import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkinfcapitalComponent } from './workinfcapital.component';

describe('WorkinfcapitalComponent', () => {
  let component: WorkinfcapitalComponent;
  let fixture: ComponentFixture<WorkinfcapitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkinfcapitalComponent]
    });
    fixture = TestBed.createComponent(WorkinfcapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
