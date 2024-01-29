import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionqrComponent } from './collectionqr.component';

describe('CollectionqrComponent', () => {
  let component: CollectionqrComponent;
  let fixture: ComponentFixture<CollectionqrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionqrComponent]
    });
    fixture = TestBed.createComponent(CollectionqrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
