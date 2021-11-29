import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAsistenciaPageRoutingModule } from './detail-asistencia-routing.module';

import { DetailAsistenciaPage } from './detail-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAsistenciaPageRoutingModule,
  ],
  declarations: [DetailAsistenciaPage]
})
export class DetailAsistenciaPageModule {}
