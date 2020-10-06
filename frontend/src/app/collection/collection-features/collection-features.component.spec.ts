import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFeaturesComponent } from './collection-features.component';

describe('CollectionFeaturesComponent', () => {
  let component: CollectionFeaturesComponent;
  let fixture: ComponentFixture<CollectionFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
