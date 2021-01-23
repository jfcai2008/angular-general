import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecksRoutingModule } from './checks-routing.module';
import { ProachesComponent } from './proaches/proaches.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [ProachesComponent, ResultsComponent],
  imports: [
    CommonModule,
    ChecksRoutingModule
  ]
})
export class ChecksModule { }
