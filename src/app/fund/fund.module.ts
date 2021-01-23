import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundRoutingModule } from './fund-routing.module';
import { HoldsComponent } from './holds/holds.component';
import { AttentionsComponent } from './attentions/attentions.component';
import { RecommendsComponent } from './recommends/recommends.component';


@NgModule({
  declarations: [HoldsComponent, AttentionsComponent, RecommendsComponent],
  imports: [
    CommonModule,
    FundRoutingModule
  ]
})
export class FundModule { }
