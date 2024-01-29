import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionlinksComponent } from './collectionlinks.component';

describe('CollectionlinksComponent', () => {
  let component: CollectionlinksComponent;
  let fixture: ComponentFixture<CollectionlinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionlinksComponent]
    });
    fixture = TestBed.createComponent(CollectionlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
