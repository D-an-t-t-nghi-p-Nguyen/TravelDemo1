import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TravelBlogComponent } from './travel-blog/travel-blog/travel-blog.component';
import { FeaturesBlogComponent } from './travel-blog/features-blog/features-blog.component';
import { MoveBlogComponent } from './travel-blog/move-blog/move-blog.component';
import { NewsBlogComponent } from './travel-blog/news-blog/news-blog.component';
import { SupportBlogComponent } from './travel-blog/support-blog/support-blog.component';
import { ContactBlogComponent } from './travel-blog/contact-blog/contact-blog.component';
import { ViewVnIdComponent } from './view-vn-id/view-vn-id.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewUserIdComponent } from './view-user-id/view-user-id.component';
import { DemoComponent } from './demo/demo.component';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent, 
        TravelBlogComponent, 
        FeaturesBlogComponent, 
        MoveBlogComponent,
        NewsBlogComponent,
        SupportBlogComponent,
        ContactBlogComponent,
        ViewVnIdComponent,
        SignupComponent,
        LoginComponent,
        ViewUserIdComponent,
        DemoComponent,
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
