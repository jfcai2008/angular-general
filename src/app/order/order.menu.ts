import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { ListComponent } from "./list/list.component";
import { OrderdetailComponent } from "./orderdetail/orderdetail.component";
import { OrdernewComponent } from "./ordernew/ordernew.component";

export const OrdersRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/list',
        data: {
            breadcrumb: '订单列表',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'list',
        component: ListComponent,
        data: {
            breadcrumb: '订单列表',
            visible: true
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'detail/:ls',
        component: OrderdetailComponent,
        data: {
            breadcrumb: '订单详情',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'ordernew',
        component: OrdernewComponent,
        data: {
            breadcrumb: '新订单',
            visible: true
        },
        // canActivate: [AuthGuard]
    }
]