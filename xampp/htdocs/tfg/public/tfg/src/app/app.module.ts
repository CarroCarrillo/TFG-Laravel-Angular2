import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { RlTagInputModule } from 'angular2-tag-input';
import { MdlModule } from 'angular2-mdl';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { AppComponent } from './components/app.component';
import { IndexComponent } from './components/index.component';
import { SignUpComponent } from './components/sign-up.component';
import { ImageDetailComponent } from './components/image-detail.component';
import { UploadImageComponent } from './components/upload-image.component';
import { UserProfileComponent } from './components/user-profile.component';
import { FinderComponent } from './components/finder.component';
import { PageNotFoundComponent } from './components/404.component';

//BLOCKS
import { LoginFormComponent } from './components/blocks/login-form.component';
import { ListComponent } from './components/blocks/list.component';
import { ProfileButtonComponent } from './components/blocks/profile-button.component';
import { DetailFieldComponent } from './components/blocks/detail-field.component';
import { SearchBarComponent } from './components/blocks/search-bar.component';

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
    ListComponent,
    SearchBarComponent,
    FinderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    RlTagInputModule,
    MdlModule
  ],
  providers: [
    ApiService,
    ImageResolver,
    UserResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
