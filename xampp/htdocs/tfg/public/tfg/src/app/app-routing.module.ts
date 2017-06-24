import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HeaderSimpleComponent } from './components/headers/header-simple.component';

import { IndexComponent } from './components/index.component';
import { SignUpComponent } from './components/sign-up.component';
import { ImageDetailComponent } from './components/image-detail.component';
import { UploadImageComponent } from './components/upload-image.component';
import { UserProfileComponent } from './components/user-profile.component';
import { FinderComponent } from './components/finder.component';

import { PageNotFoundComponent } from './components/404.component';

import { ImageResolver } from './services/resolvers/image-resolver.service';
import { UserResolver } from './services/resolvers/user-resolver.service';

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
    path: 'buscador', children: [
      { path: '', component: HeaderSimpleComponent, outlet: "header" },
      { path: '', component: FinderComponent }
    ]
  },
  { path: 'perfil', children: [
      { path: ':id',
        resolve: {
          user: UserResolver
        },
        children: [
          { path: '', component: HeaderSimpleComponent, outlet: "header" },
          { path: '', component: UserProfileComponent }
        ]
        },

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