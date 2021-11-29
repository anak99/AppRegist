import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-asistencia',
  templateUrl: './detail-asistencia.page.html',
  styleUrls: ['./detail-asistencia.page.scss'],
})
export class DetailAsistenciaPage implements OnInit {

  asistencias: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.asistencias = this.router.getCurrentNavigation().extras.state.asistencias;
      console.log(this.asistencias);
    }
  }

  ngOnInit() {
  }

}