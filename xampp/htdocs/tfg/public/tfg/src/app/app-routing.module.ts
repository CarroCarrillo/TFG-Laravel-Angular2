import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { IndexComponent } from './components/index.component';
import { SignUpComponent } from './components/sign-up.component';
import { ImageDetailComponent } from './components/image-detail.component';
import { UploadImageComponent } from './components/upload-image.component';

import { PageNotFoundComponent } from './components/404.component';

import { ImageResolver } from './services/resolvers/image-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio', children: [
      { path: '', component: HeaderSimpleComponent, outlet: "header" },
      { path: '', component: IndexComponent }
    ]
  },
  {
    path: 'registro', children: [
      { path: '', component: HeaderSimpleComponent, outlet: "header" },
      { path: '', component: SignUpComponent }
    ]
  },
  {
    path: 'imagen', children: [{
      path: ':id',
      resolve: {
        image: ImageResolver
      },
      children: [
        { path: '', component: HeaderSimpleComponent, outlet: "header" },
        { path: '', redirectTo: 'detalle', pathMatch: 'full' },
        { path: 'detalle', component: ImageDetailComponent }
      ]
    }]
  },
  {
    path: 'subir', children: [
      { path: '', component: HeaderSimpleComponent, outlet: "header" },
      { path: '', component: UploadImageComponent }
    ]
  },
  {
    path: '404', children: [
      { path: '', component: PageNotFoundComponent },
      { path: '', component: HeaderSimpleComponent, outlet: "header" }
    ]
  },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }