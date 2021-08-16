import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { BlogTravelVnComponent } from './blog-travel-vn/blog-travel-vn.component';
import { BlogTravelVnAddComponent } from './blog-travel-vn-add/blog-travel-vn-add.component';
import { BlogTravelVnUpdateComponent } from './blog-travel-vn-update/blog-travel-vn-update.component';
import { BlogTravelVnGetIdComponent } from './blog-travel-vn-get-id/blog-travel-vn-get-id.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
    imports: [
        CommonModule, 
        LayoutRoutingModule, 
        TranslateModule, 
        NgbDropdownModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
    declarations: [
        LayoutComponent, 
        SidebarComponent, 
        HeaderComponent, 
        BlogTravelVnComponent,
        BlogTravelVnAddComponent, 
        BlogTravelVnUpdateComponent, 
        BlogTravelVnGetIdComponent,
        UserUpdateComponent, 
        UserListComponent, 
        UserDetailsComponent
    ]
})
export class LayoutModule {}
