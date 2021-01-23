import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowlegesRoutes } from './knowleges.menu'

const routes: Routes = [
  ...KnowlegesRoutes
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowlegesRoutingModule { }
