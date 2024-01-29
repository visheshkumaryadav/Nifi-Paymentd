import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarycardComponent } from './salarycard.component';

describe('SalarycardComponent', () => {
  let component: SalarycardComponent;
  let fixture: ComponentFixture<SalarycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalarycardComponent]
    });
    fixture = TestBed.createComponent(SalarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
