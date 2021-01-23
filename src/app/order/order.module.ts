import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { ListComponent } from './list/list.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrdernewComponent } from './ordernew/ordernew.component';


@NgModule({
  declarations: [ListComponent, OrderdetailComponent, OrdernewComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
