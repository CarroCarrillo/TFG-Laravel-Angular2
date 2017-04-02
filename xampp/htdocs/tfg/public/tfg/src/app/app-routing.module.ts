import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { IndexComponent } from './components/index.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio',  children: [
      { path: '', component: HeaderSimpleComponent, outlet: "header" },
      { path: '', component: IndexComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ],
  providers: []
})

export class AppRoutingModule {}