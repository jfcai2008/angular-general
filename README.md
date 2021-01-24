# AngularGeneral

是否算是一个比较通用的angular应用模板？
我的目的是为自己的以后项目做一个框架。
暂时有如下特性：

## 一、多路由  
应用中各个不同的业务功能可以有自己不同的布局模板。  
登录，错误处理有着自己的路由，自己的布局。  
例子中的基金有自己的路由，自己的布局模板。  
例子中的足球有自己的路由和自己的布局模板。  
等等。

## 二、实现了懒加载  
基于业务功能的子路由实现了懒加载  
懒加载的路由也能动态加入到菜单中。（见后面的实现方法）  

## 三、基于业务功能创建模块  
假如我们的项目中包括订单，用户，商品，足球，基金  
基于业务功能创建模块，  
ng g m soccer --routing  
ng g m fund --routing  
ng g m user --routing  
ng g m order --routing  
--routing //表示创建的模块带路由，用于懒加载  

创建结束之后  
我们在app目录下就可以发现如下目录  
soccer  
user  
order  
fund  
...  
等目录  
现在假设我的足球模块中包括页面联赛，球队，分析等页面,我们可以如下创建页面组件  
ng g c soccer/leagues  
ng g c soccer/teams  
ng g c soccer/analysis  
创建结束之后  
我们在soccer目录下就可以发现如下目录  
leagues  
teams  
analysis  
...  
等目录，每个目录都包括该页面所需要的一系列文件。  

## 四、多级路由生成  
ng g c soccerLayout --module=app.module  
如上生成基于业务功能应用的布局组件。  
注意，所有的布局组件都应加入到app.module.ts模块中。  
等等  
修改根下的app.component.ts仅保留<router-outlet></router-outlet>。即将直接展示子路由组件内容。如登录页等。  
在根路由文件下的如下路由部分  
    {  
        path: 'login',  
        pathMatch: 'full',  
        component:LoginComponent,  
        data: {  
            breadcrumb: '登录',  
            visible: false  
        },  
    },  
将使用根组件。  
而路由中的如下部分  
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
将使用LayoutsoccerComponent组件作为布局组件。  

## 五、合作开发备注  
1.每成员可基于【三、基于业务功能创建模块】创建自己的模块和页面和组件。  
2.将该业务功能模块中路由文件中的（已完成路由数组内容提取出来）生成一个***.menu.ts文件。  
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
3.将***.menu.ts引入到***.routing.ts文件中，并并入到routes变量，完成本模块的路由文件修改。  

## 六、路由合并  
新建一个根下的app.menu.ts文件。  
完成总菜单文件，其中可根据业务功能并入子菜单文件。如果业务功能子菜单要采用不同的  
模板，请在此处指定。如  
import { LayoutComponent } from './pages/layout/layout.component';  
import { LayoutsoccerComponent } from './pages/layoutsoccer/layoutsoccer.component';  
  
...  
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
    ...  

最后将此app.menu.ts内容并入到根路由中  
import { MainRoutes } from './app.menu'  

const routes: Routes = [  
  ...MainRoutes  
 ];  

如果有样式文件加入，直接在styles.scss中import即可。  
发现，我的知识库中用到了组件NzTabsModule  
则必须在knowleges.module.ts中imports,在app.module.ts中imports无效。  

## 七、路由守卫 

![Image text](https://raw.githubusercontent.com/jfcai2008/angular-general/main/images/login.png)
![Image text](https://raw.githubusercontent.com/jfcai2008/angular-general/main/images/home1.png)
![Image text](https://raw.githubusercontent.com/jfcai2008/angular-general/main/images/home2.png)
![Image text](https://raw.githubusercontent.com/jfcai2008/angular-general/main/images/home3.png)

参考：https://www.cnblogs.com/huangenai/p/12191832.html  
对功能模块的划分  
1.业务型模块：整一个应用程序，根据其业务功能我们可以将程序拆分为一个个模块，有很明确的业务特性，围绕其业务功能的模块。例如：用户模块，订单模块等。它有自己独立的路由，有提供与此模块的服务，有一个或多个组件，它惰性懒加载，不会导出或提供任何组件或指令管道，引用官方、本应用程序或第三方的功能模块。它有明确的业务特性，不与别的模块有耦合性。  

2.组件模块：应用程序中通常都有规范化的标准设计 ，比如说统一的table，card  date 等。将这些都抽出来，做成一个个组件，在模块中导出此组件以供其他模块使用，这样减少了应用程序中重复的样式代码等。曾经我是将所有这种可能多处要使用的封装为组件后，统一在一个模块中导出，后来演变为每一个组件都拆分为一个模块。这样也是发现如果这种通用性的组件多起来的话，假设有二三十个组件在这个UIComponent模块中，而我因为要使用其中一两个组件而导入这个模块，性能是很差的，所以后来都将组件拆分为一个个模块以供业务模块使用，例：DateModule，InputModule..等。

3.服务模块：提供一些通用型的服务。比如说http服务对httpClient二次包装适用于项目，文件服务，配置服务等。  

4.其他模块：应用程序中我们会根据需要会做一些指令管道等，其就形成一个指令模块包含应用程序中所有等指令，管道模块包含应用程序中的所有管道。后来觉得，其实这些指令管道不需要集中起来统一导出引用。因为一个模块并不会引用到指令模块中超过百分之八十的指令，so 只需要把它们集中到一个pipe文件夹下，哪个模块需要用到具体个指令or管道，直接声明在其模块中使用便可。  

5.创建，导入特性模块  
我们将系统根据其功能业务划分好模块，有利于合作开发，代码的维护和使用。  

基于业务功能创建特性模块  
ng g m order // 创建订单模块  
// ng g m order --routing //创建的订单模块带路由  
ng g c order/list  // 订单模块下新建一个list 组件  
我们看最后cli给我们生成的目录结构  
...  

非惰性，直接将订单模块导入根模块  
app.module.ts  

import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  

import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { OrderModule } from './order/order.module';  

@NgModule({  
  declarations: [  
    AppComponent  
  ],  
  imports: [  
    BrowserModule,
    AppRoutingModule,  
    OrderModule //将order模块导入  
  ],  
  providers: [],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  

6.惰性加载模块  

如果我们将所有的模块都导入根模块，那么应用在初始化加载的时候就会非常慢。这时候我们应该考虑使用惰性加载。根据需求加载相应都模块，减少应用初始化包的大小以及减少加载的时间，提高用户体验性。  

惰性加载的模块特点是该模块拥有路由模块。so 接着上面我们创建了一个订单模块 我们给订单模块加上路由。并再创建一个user.module以及user.module模块下的list组件。  

7.共享模块  

共享模块顾名思义，就是共享于所有的模块中。首先得定义好这个模块的具体功能特性，比如指令、管道和组件等分别封装成一个个模块，哪些业务模块需要使用到其里面的功能变导入其模块中便可。简单的比如，本系统的input 都是统一样式的，我们可以制作一个input 模块 然后在其他模块直接导入使用。这极大的规范了系统的统一性和降低了以后的维护成本。  

