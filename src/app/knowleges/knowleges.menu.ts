import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ExplainsComponent } from "./explains/explains.component";
import { LawsComponent } from "./laws/laws.component";
import { TablesComponent } from "./tables/tables.component";

export const KnowlegesRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/tables',
        data: {
            breadcrumb: '台帐管理',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'tables',
        component: TablesComponent,
        data: {
            breadcrumb: '台帐管理',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'laws',
        component: LawsComponent,
        data: {
            breadcrumb: '法律法规',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'explains',
        component: ExplainsComponent,
        data: {
            breadcrumb: '案由解读',
            visible: true
        },
        // canActivate: [AuthGuard]
    }
]