import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { IndexComponent } from './components/index.component';

import { PageNotFoundComponent } from './components/404.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio',  children: [
      { path: '', component: HeaderSimpleComponent, outlet: "header" },
      { path: '', component: IndexComponent }
  ]},
  { path: '404', children: [
    { path: '', component: PageNotFoundComponent },
    { path: '', component: HeaderSimpleComponent, outlet: "header" }
  ]},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}