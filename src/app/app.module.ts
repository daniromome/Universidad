import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaDeAlumnosComponent } from './lista-de-alumnos/lista-de-alumnos.component';
import { InfoAlumnoComponent } from './info-alumno/info-alumno.component';
import { AlumnDataService } from './alumn-data.service';
import { ListaDeAlumnosJsonComponent } from './lista-de-alumnos-json/lista-de-alumnos-json.component';
import { InfoAlumnoJsonComponent } from './info-alumno-json/info-alumno-json.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    InicioComponent,
    ListaDeAlumnosComponent,
    InfoAlumnoComponent,
    ListaDeAlumnosJsonComponent,
    InfoAlumnoJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component : InicioComponent},
      { path: 'alumnos', component : ListaDeAlumnosComponent},
      { path: 'alumnosjson', component : ListaDeAlumnosJsonComponent},
      { path: 'alumnojson/:alumnoId', component : InfoAlumnoComponent},
      { path: 'alumno/:alumnoId', component : InfoAlumnoComponent},
      { path: 'info', component : AcercaDeComponent},
    ])
  ],
  providers: [AlumnDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
