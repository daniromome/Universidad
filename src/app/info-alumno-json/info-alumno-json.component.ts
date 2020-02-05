import { Component, OnInit } from '@angular/core';

import { AlumnDataService } from '../alumn-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-alumno-json',
  templateUrl: './info-alumno-json.component.html',
  styleUrls: ['./info-alumno-json.component.css']
})
export class InfoAlumnoJsonComponent implements OnInit {

  Alumno;

  constructor(
    private Alumnos: AlumnDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.Alumno = this.Alumnos[+params.get('alumnoId')];
    });
  }

}
