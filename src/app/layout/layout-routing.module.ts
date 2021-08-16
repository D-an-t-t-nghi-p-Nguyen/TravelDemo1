import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogTravelVnAddComponent } from './blog-travel-vn-add/blog-travel-vn-add.component';
import { BlogTravelVnGetIdComponent } from './blog-travel-vn-get-id/blog-travel-vn-get-id.component';
import { BlogTravelVnUpdateComponent } from './blog-travel-vn-update/blog-travel-vn-update.component';
import { BlogTravelVnComponent } from './blog-travel-vn/blog-travel-vn.component';
import { LayoutComponent } from './layout.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path:'travelvietnam',component:BlogTravelVnComponent},
            {path:'travelvietnamadd',component:BlogTravelVnAddComponent},
            {path:'travelvietnamupdate/:id',component:BlogTravelVnUpdateComponent},
            {path:'travelvietnamgetid/:id',component:BlogTravelVnGetIdComponent},
            {path:'userlist',component:UserListComponent},
            {path:'userupdate/:id',component:UserUpdateComponent},
            {path:'userdetails/:id',component:UserDetailsComponent},
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
