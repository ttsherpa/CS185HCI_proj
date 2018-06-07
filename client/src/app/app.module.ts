import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import {PublicProfileComponent } from './components/public-profile/public-profile.component';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {ModalModule} from "ng2-modal";
import { SettingsComponent } from './components/settings/settings.component';
import { DeleteUserComponent } from './components/settings/delete-user/delete-user.component';
import { UpdatePasswordComponent } from './components/settings/update-password/update-password.component';
import { ImageCropperModule } from 'ng2-img-cropper';
import { D3Component } from './components/d3/d3.component';
import { D3twoComponent } from './components/d3two/d3two.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent,
    SettingsComponent,
    DeleteUserComponent,
    UpdatePasswordComponent,
    D3Component,
    D3twoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    ModalModule,
    ImageCropperModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
