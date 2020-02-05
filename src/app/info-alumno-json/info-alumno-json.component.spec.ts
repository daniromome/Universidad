import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlumnoJsonComponent } from './info-alumno-json.component';

describe('InfoAlumnoJsonComponent', () => {
  let component: InfoAlumnoJsonComponent;
  let fixture: ComponentFixture<InfoAlumnoJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoAlumnoJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAlumnoJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
