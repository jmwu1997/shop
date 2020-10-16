import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcartItemComponent } from './viewcart-item.component';

describe('ViewcartItemComponent', () => {
  let component: ViewcartItemComponent;
  let fixture: ComponentFixture<ViewcartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
