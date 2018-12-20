import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecipelistComponent } from './viewrecipelist.component';

describe('ViewrecipelistComponent', () => {
  let component: ViewrecipelistComponent;
  let fixture: ComponentFixture<ViewrecipelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrecipelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrecipelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
