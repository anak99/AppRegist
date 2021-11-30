import { Injectable } from '@angular/core';
import { AsignaturasPage } from './asignaturas.page';
import { Asignatura } from './asignaturas.model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  listaAsignaturas : Asignatura[]=[
    {
      id :"1",
      nombre:"Diseño de Prototipo",
      docente:"Cindy Perez",
      horario:"Lunes y Martes"

    },
    {
    id :"2",
    nombre:"Base de Datos",
    docente:"Orlando Sepulveda",
    horario:"Viernes y Miercoles"
  }
];
constructor() {}

getAsignaturas()
{
   return [...this.listaAsignaturas];
}

getAsignatura(asignaturaId: string)
{
  return {
          ...this.listaAsignaturas.find(asignatura => {return asignatura.id === asignaturaId })
         }
}
}