import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAsignaturaPageRoutingModule } from './detail-asignatura-routing.module';

import { DetailAsignaturaPage } from './detail-asignatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAsignaturaPageRoutingModule
  ],
  declarations: [DetailAsignaturaPage]
})
export class DetailAsignaturaPageModule {}
