import { Component, OnInit } from '@angular/core';

import { AlumnDataService } from '../alumn-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-alumno-json',
  templateUrl: './info-alumno-json.component.html',
  styleUrls: ['./info-alumno-json.component.css']
})
export class InfoAlumnoJsonComponent implements OnInit {

  Alumnos;
  id;

  constructor(
    private alumnos: AlumnDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('alumnoId');
    });
    this.Alumnos = this.alumnos.getAlumnos();
  }

}
