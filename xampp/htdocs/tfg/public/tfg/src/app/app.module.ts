import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { AppComponent } from './components/app.component';
import { IndexComponent } from './components/index.component';
import { LoginFormComponent } from './components/blocks/login-form.component';
import { SignUpComponent } from './components/sign-up.component';
import { ProfileButtonComponent } from './components/blocks/profile-button.component';
import { ImageDetailComponent } from './components/image-detail.component';
import { DetailFieldComponent } from './components/blocks/detail-field.component';
import { PageNotFoundComponent } from './components/404.component';

import { ApiService } from './services/api.service';
import { ImageResolver } from './services/resolvers/image-resolver.service';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService,
    ImageResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
