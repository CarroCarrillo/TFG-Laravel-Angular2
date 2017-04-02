import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { AppComponent } from './components/app.component';
import { IndexComponent } from './components/index.component';

@NgModule({
  declarations: [
    HeaderSimpleComponent,
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
