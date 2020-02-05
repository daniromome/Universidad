import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeAlumnosJsonComponent } from './lista-de-alumnos-json.component';

describe('ListaDeAlumnosJsonComponent', () => {
  let component: ListaDeAlumnosJsonComponent;
  let fixture: ComponentFixture<ListaDeAlumnosJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeAlumnosJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeAlumnosJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
