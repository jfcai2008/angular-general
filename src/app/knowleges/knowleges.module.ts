import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowlegesRoutingModule } from './knowleges-routing.module';
import { TablesComponent } from './tables/tables.component';
import { LawsComponent } from './laws/laws.component';
import { ExplainsComponent } from './explains/explains.component';
import { TabbedpageComponent } from '../pages/tabbedpage/tabbedpage.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


@NgModule({
  declarations: [TablesComponent, LawsComponent, ExplainsComponent,TabbedpageComponent],
  imports: [
    CommonModule,
    KnowlegesRoutingModule,
    NzTabsModule
  ]
})
export class KnowlegesModule { }
