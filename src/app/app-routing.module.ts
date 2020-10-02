import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroListComponent } from './hero-list/hero-list.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { PlataformaComponent } from "./components/plataforma/plataforma.component";
import { HomeComponent } from "./components/home/home.component";
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'heroes', component: HeroListComponent },
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