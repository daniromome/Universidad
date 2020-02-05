import { Component, OnInit } from '@angular/core';

import { Alumnos } from '../alumno';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.css']
})
export class ListaDeAlumnosComponent implements OnInit {

  Alumnos = Alumnos;

  constructor() { }

  ngOnInit() {
  }

}
