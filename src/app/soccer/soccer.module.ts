import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoccerRoutingModule } from './soccer-routing.module';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { MatchesComponent } from './matches/matches.component';


@NgModule({
  declarations: [LeaguesComponent, TeamsComponent, AnalysisComponent, MatchesComponent],
  imports: [
    CommonModule,
    SoccerRoutingModule
  ]
})
export class SoccerModule { }
