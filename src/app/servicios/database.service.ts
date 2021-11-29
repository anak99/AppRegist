import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Asignatura } from '../asignaturas/asignaturas.model';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  private dbReady = new BehaviorSubject<boolean>(false);
  private dataBase: SQLiteObject;
  private http: HttpClient;
  private sqlPorter: SQLitePorter;
  private sqlite: SQLite;

  listaAsignaturas = new BehaviorSubject([]);

  private asignatura: Asignatura;

  constructor(
    private platform: Platform, 
    sqlite: SQLite, 
    private httpClient: HttpClient,
    sqlPorter: SQLitePorter,
  ) {
    this.sqlite=sqlite;
    this.http=this.http;
    this.sqlPorter=sqlPorter;
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'DataBaseAsignaturas.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
          this.dataBase = db;
          this.crearTablas();
      });
    });
  }
  crearTablas() {
    this.httpClient.get(
      '../assets/db/CreateDatabase.sql', 
      {responseType: 'text'}
    ).subscribe(sql => {
      this.sqlPorter.importSqlToDb(this.dataBase, sql)
        .then(_ => {
          this.cargarAsignaturas();
          this.dbReady.next(true);
        })
        .catch(error => console.error(error));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

 getAsignaturas(): Observable<Asignatura[]>{
          return this.listaAsignaturas.asObservable();
  }

  cargarAsignaturas(){
    return this.dataBase.executeSql('SELECT * FROM asignatura', []).then(data => {
      let asignaturas: Asignatura[] = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          asignaturas.push(
            data.rows.item(i));
        }
      }
      this.listaAsignaturas.next(asignaturas);
    });
  }

  getAsignatura(id): Promise<Asignatura> {
  return this.dataBase.executeSql('SELECT * FROM Asignatura WHERE id = ?', [id]).then(resSelect =>{
    return {
      id: resSelect.rows.item(0).id,
      nombre: resSelect.rows.item(0).nombre,
      docente: resSelect.rows.item(0).docente,
      horario: resSelect.rows.item(0).horario
    }
  });
}
}
