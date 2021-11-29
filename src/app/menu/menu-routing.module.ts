import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {

    path: '',
    component: MenuPage,
    children: [{
      path:'asistencia',
      loadChildren: () => import('../asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
