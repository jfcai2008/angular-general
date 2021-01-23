import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { AnalysisComponent } from "./analysis/analysis.component";
import { TeamsComponent } from "./teams/teams.component";
import { MatchesComponent } from "./matches/matches.component";
import { LeaguesComponent } from './leagues/leagues.component'

export const SoccerRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/leagues',
        data: {
            breadcrumb: '联赛管理',
            visible: false
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'leagues',
        component: LeaguesComponent,
        data: {
            breadcrumb: '联赛管理',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'teams',
        component: TeamsComponent,
        data: {
            breadcrumb: '球队查询',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'matches',
        component: MatchesComponent,
        data: {
            breadcrumb: '赛事列表',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'analysis',
        component: AnalysisComponent,
        data: {
            breadcrumb: '赛事分析',
            visible: true
        }
    }
]