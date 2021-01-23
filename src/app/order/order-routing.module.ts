import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersRoutes } from './order.menu'

const routes: Routes = [
  ...OrdersRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
