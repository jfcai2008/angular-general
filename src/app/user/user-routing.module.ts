import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRoutes } from './user.menu'

const routes: Routes = [
  ...UserRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
