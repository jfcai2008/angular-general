import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { ChecksRoutes } from './checks/checks.menu';
import { FundRoutes } from './fund/fund.menu';
import { KnowlegesRoutes } from './knowleges/knowleges.menu';
import { OrdersRoutes } from './order/order.menu';
import { SoccerRoutes } from './soccer/soccer.menu';
import { UserRoutes } from './user/user.menu';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LayoutsoccerComponent } from './pages/layoutsoccer/layoutsoccer.component';
import { LayoutknowledgeComponent } from './pages/layoutknowledge/layoutknowledge.component';

export const MainRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/fund',
        data: {
            breadcrumb: '欢迎',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'login',
        pathMatch: 'full',
        component:LoginComponent,
        data: {
            breadcrumb: '登录',
            visible: false
        },
    },
    {
        path: 'welcome',
        loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
        data: {
            breadcrumb: '欢迎',
            visible: false
        },
        // canActivate: [AuthGuard]
    },
    {
        path: 'fund',
        component:LayoutComponent,
        loadChildren: () => import('./fund/fund.module').then(m => m.FundModule),
        data: {
            breadcrumb: '基金',
            visible: true,
            menus: FundRoutes
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'soccer',
        component:LayoutsoccerComponent,
        loadChildren: () => import('./soccer/soccer.module').then(m => m.SoccerModule),
        data: {
            breadcrumb: '足球',
            visible: true,
            menus: SoccerRoutes
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'user',
        component:LayoutComponent,
        loadChildren: () => import('./user/user.module').then(m => m.UserModule),
        data: {
            breadcrumb: '用户管理',
            visible: true,
            menus: UserRoutes
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowleges',
        component:LayoutComponent,
        loadChildren: () => import('./knowleges/knowleges.module').then(m => m.KnowlegesModule),
        data: {
            breadcrumb: '知识库',
            visible: true,
            menus: KnowlegesRoutes
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'order',
        component:LayoutComponent,
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule),
        data: {
            breadcrumb: '订单管理',
            visible: true,
            menus: OrdersRoutes
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'checks',
        component:LayoutComponent,
        loadChildren: () => import('./checks/checks.module').then(m => m.ChecksModule),
        data: {
            breadcrumb: '绩效考核',
            visible: true,
            menus: ChecksRoutes
        },
        canActivate: [AuthGuard]
    },
]