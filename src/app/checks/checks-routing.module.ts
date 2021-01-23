import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecksRoutes } from './checks.menu'

const routes: Routes = [
  ...ChecksRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChecksRoutingModule { }
