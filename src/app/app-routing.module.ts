import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PlataformaComponent } from "./components/plataforma/plataforma.component";
import { HomeComponent } from "./components/home/home.component";

import { RecursosComponent } from './components/recursos/recursos.component';
import { AgregarrecursoComponent } from "./components/agregarrecurso/agregarrecurso.component";
import { AboutComponent } from "./components/about/about.component";
// import { HeroListComponent } from './hero-list/hero-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'recursos', component: RecursosComponent },
  { path: 'agregarrecursos', component: AgregarrecursoComponent },
  { path: 'about', component: AboutComponent },
  // { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }