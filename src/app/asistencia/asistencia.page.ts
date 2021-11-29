import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  fecha: string;

  asistencias: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }>

  asistenciaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  };

  constructor(public toastController: ToastController) { 
    moment.locale('es-cl');
    this.fecha = moment().format();
    this.cargarAsistencias();
  }

  ngOnInit() {
  }

  cargarAsistencias(){
    var fecha = moment(this.fecha).format('DD-MM-YY');

    this.asistencias = JSON.parse(localStorage.getItem('asistencias'));
    if(this.asistencias){
      var asistenciaActual = this.asistencias.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(asistenciaActual){
        this.asistenciaActual = asistenciaActual;
      }else{
        this.inicializarNuevaAsistencia();
      }
    }else{
      this.inicializarNuevaAsistencia();
    }
  }

  inicializarNuevaAsistencia(){
    var fecha = moment(this.fecha).format('DD-MM-YY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MMMM');
    var year = moment(this.fecha).format('YYYY');

    this.asistenciaActual = {
      fechaTexto: dia + ' de ' + mes + ' del ' +  year,
      fecha: fecha,
      texto: ''
    }
  }

  async guardar(asistenciaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }){

    var fecha = moment(this.fecha).format('DD-MM-YY');

    if(this.asistencias){
      var item = this.asistencias.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(item){
        localStorage.setItem('asistencias',JSON.stringify(this.asistencias));
      }else{
        this.guardarItem(asistenciaActual);
      }

    }else{
      this.asistencias = [];
      this.guardarItem(asistenciaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  guardarItem(asistencia:{fecha: string,fechaTexto: string,texto: string }){
    this.asistencias.push(asistencia);
    localStorage.setItem('asistencia',JSON.stringify(this.asistencias));
  }

}