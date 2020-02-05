import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  show = true;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.show = false;
    setTimeout(() => this.show = true, 5000);
  }

}
