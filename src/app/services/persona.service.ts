import { Injectable } from '@angular/core';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private localData: Persona[] = [
    {
      nombre: "Pedro",
      edad: 20,
      carrera: "Ingeniería",
      hobbie: "Futbol"
    },
    {
      nombre: "Rodrigo",
      edad: 22,
      carrera: "Arquitectura",
      hobbie: "Bajo eléctrico"
    },
    {
      nombre: "Romina",
      edad: 21,
      carrera: "Abogacía",
      hobbie: "Acrobacia"
    },
    {
      nombre: "Ana",
      edad: 23,
      carrera: "Contadora",
      hobbie: "Astronomía"
    },
    {
      nombre: "Gabriel M. Barraza",
      edad: 24,
      carrera: "Ingenieria de Sistemas",
      hobbie: "Patinar en skate"
    },
  ]

  constructor() { }

  getAll(): Persona[] {
    return this.localData;
  }
}
