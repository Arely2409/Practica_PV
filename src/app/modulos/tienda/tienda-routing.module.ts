import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './pages/categorias/categorias.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:"categorias",
    component: CategoriasComponent
   },{
    path:"marcas",
    component: MarcasComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
