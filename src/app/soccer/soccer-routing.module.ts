import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SoccerRoutes } from './soccer.menu'

const routes: Routes = [
  ...SoccerRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoccerRoutingModule { }
