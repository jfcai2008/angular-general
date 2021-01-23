import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundRoutes } from './fund.menu'

const routes: Routes = [
  ...FundRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundRoutingModule { }
