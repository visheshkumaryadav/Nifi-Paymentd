import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdrafComponent } from './overdraf.component';

describe('OverdrafComponent', () => {
  let component: OverdrafComponent;
  let fixture: ComponentFixture<OverdrafComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverdrafComponent]
    });
    fixture = TestBed.createComponent(OverdrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
