import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Alumnos } from '../alumno';

@Component({
  selector: 'app-info-alumno',
  templateUrl: './info-alumno.component.html',
  styleUrls: ['./info-alumno.component.css']
})
export class InfoAlumnoComponent implements OnInit {

  alumno;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe (params => {
      this.alumno = Alumnos[+params.get('alumnoId')];
    });
  }

}
