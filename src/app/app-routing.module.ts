import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { AuthGuard } from './shared';
import { ContactBlogComponent } from './travel-blog/contact-blog/contact-blog.component';
import { FeaturesBlogComponent } from './travel-blog/features-blog/features-blog.component';
import { MoveBlogComponent } from './travel-blog/move-blog/move-blog.component';
import { NewsBlogComponent } from './travel-blog/news-blog/news-blog.component';
import { SupportBlogComponent } from './travel-blog/support-blog/support-blog.component';
import { TravelBlogComponent } from './travel-blog/travel-blog/travel-blog.component';
import { ViewUserIdComponent } from './view-user-id/view-user-id.component';
import { ViewVnIdComponent } from './view-vn-id/view-vn-id.component';

const routes: Routes = [
    {path:'view/:id', component:DemoComponent},
    {path:'viewvn/:id',component:ViewVnIdComponent},
    {
        path: '',
        loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'featuresblog',   component:FeaturesBlogComponent    
    },
    {
        path: 'ahometravel',    component:TravelBlogComponent
    },
    {
        path: 'moveblog',   component:MoveBlogComponent    
    },
    {
        path: 'newsblog',   component:NewsBlogComponent    
    },
    {
        path: 'supportblog',   component:SupportBlogComponent    
    },
    {
        path: 'contactblog',   component:ContactBlogComponent    
    },
    {
        path: 'viewuser', component:ViewUserIdComponent
    },
    { path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./signup/signup.module').then((m) => m.SignupModule) },
    {
        path: 'error',
        loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
    },
    {
        path: 'access-denied',
        loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
    },
    { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
