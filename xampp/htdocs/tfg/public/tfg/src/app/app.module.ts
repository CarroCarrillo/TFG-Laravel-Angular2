import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { AppComponent } from './components/app.component';
import { IndexComponent } from './components/index.component';
import { SignUpComponent } from './components/sign-up.component';
import { ImageDetailComponent } from './components/image-detail.component';
import { UploadImageComponent } from './components/upload-image.component';
import { UserProfileComponent } from './components/user-profile.component';
import { PageNotFoundComponent } from './components/404.component';

//BLOCKS
import { LoginFormComponent } from './components/blocks/login-form.component';
import { ListComponent } from './components/blocks/list.component';
import { ProfileButtonComponent } from './components/blocks/profile-button.component';
import { DetailFieldComponent } from './components/blocks/detail-field.component';

import { ApiService } from './services/api.service';
import { ImageResolver } from './services/resolvers/image-resolver.service';
import { UserResolver } from './services/resolvers/user-resolver.service';

@NgModule({
  declarations: [
    HeaderSimpleComponent,
    AppComponent,
    IndexComponent,
    LoginFormComponent,
    SignUpComponent,
    ProfileButtonComponent,
    ImageDetailComponent,
    DetailFieldComponent,
    UploadImageComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    ImageResolver,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
