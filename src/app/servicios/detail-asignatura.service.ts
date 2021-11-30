import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailAsignaturaService {
  getAsignatura(idAsignaturaRecibido: string): import("../asignaturas/asignaturas.model").Asignatura {
    throw new Error('Method not implemented.');
  }
_url ='http://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getInfo(){
    let header = new HttpHeaders()
      .set('Type-content','aplication/json')
    return this.http.get(this._url, {
      headers: header});
    }
}
