import { Component, OnInit } from '@angular/core';
import { AlumnDataService } from '../alumn-data.service';

@Component({
  selector: 'app-lista-de-alumnos-json',
  templateUrl: './lista-de-alumnos-json.component.html',
  styleUrls: ['./lista-de-alumnos-json.component.css']
})
export class ListaDeAlumnosJsonComponent implements OnInit {

  AlumnosJson;

  constructor(
    private AlumnData: AlumnDataService
  ) { }

  ngOnInit() {
    this.AlumnosJson = this.AlumnData.getAlumnos();
  }

}
