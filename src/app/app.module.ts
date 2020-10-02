import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlataformaComponent } from './components/plataforma/plataforma.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarrecursoComponent } from './components/agregarrecurso/agregarrecurso.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    PlataformaComponent,
    HomeComponent,
    RecursosComponent,
    AboutComponent,
    NavbarComponent,
    AgregarrecursoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
