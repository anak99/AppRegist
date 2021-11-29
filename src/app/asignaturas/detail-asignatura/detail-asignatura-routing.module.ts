import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAsignaturaPage } from './detail-asignatura.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAsignaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAsignaturaPageRoutingModule {}
