import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAsistenciaPage } from './detail-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAsistenciaPageRoutingModule {}
