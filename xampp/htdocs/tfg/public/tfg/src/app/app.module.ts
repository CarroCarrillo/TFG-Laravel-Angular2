import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { AppComponent } from './components/app.component';
import { IndexComponent } from './components/index.component';
import { PageNotFoundComponent } from './components/404.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    HeaderSimpleComponent,
    AppComponent,
    IndexComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
