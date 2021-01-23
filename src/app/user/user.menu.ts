import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { UsernewComponent } from "./usernew/usernew.component";

export const UserRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/list',
        data: {
            breadcrumb: '用户列表',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'list',
        component: ListComponent,
        data: {
            breadcrumb: '用户列表',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'detail',
        component: DetailComponent,
        data: {
            breadcrumb: '用户详情',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'usernew',
        component: UsernewComponent,
        data: {
            breadcrumb: '新增用户',
            visible: true
        },
        // canActivate: [AuthGuard]
    }
]