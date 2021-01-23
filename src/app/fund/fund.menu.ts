import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { HoldsComponent } from "./holds/holds.component";
import { AttentionsComponent } from "./attentions/attentions.component";
import { RecommendsComponent } from "./recommends/recommends.component";
// import {LayoutComponent} from '../pages/layout/layout.component'
export const FundRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/holds',
        data: {
            breadcrumb: '持有基金',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'holds',
        component: HoldsComponent,
        data: {
            breadcrumb: '持有基金',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'AttentionsComponent',
        component: AttentionsComponent,
        data: {
            breadcrumb: '关注基金',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'recommends',
        component: RecommendsComponent,
        data: {
            breadcrumb: '基金推介',
            visible: true
        },
        // canActivate: [AuthGuard]
    }
]