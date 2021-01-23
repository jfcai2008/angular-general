import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdernewComponent } from './ordernew.component';

describe('OrdernewComponent', () => {
  let component: OrdernewComponent;
  let fixture: ComponentFixture<OrdernewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdernewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
