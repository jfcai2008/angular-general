import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ProachesComponent } from "./proaches/proaches.component";
import { ResultsComponent } from "./results/results.component";

export const ChecksRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/proaches',
        data: {
            breadcrumb: '考核办法',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'proaches',
        component: ProachesComponent,
        data: {
            breadcrumb: '考核办法',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'results',
        component: ResultsComponent,
        data: {
            breadcrumb: '考核结果',
            visible: true
        },
        // canActivate: [AuthGuard]
    }
]