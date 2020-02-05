import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnDataService {

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos() {
    return this.http.get('/assets/data/alumnos.json');
  }

}
