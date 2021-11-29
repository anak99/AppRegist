import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from './asignaturas.service';
import { Asignatura} from './asignaturas.model';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {
  listaAsignaturas  =[];
  asignaturaService: AsignaturaService;

  constructor(  asignaturaService: AsignaturaService ) {
    this.asignaturaService=asignaturaService;
  }
 ngOnInit() {
   this.listaAsignaturas=this.asignaturaService.getAsignaturas();
 }
 ionViewWillEnter() {
 this.listaAsignaturas=this.asignaturaService.getAsignaturas();
}

}