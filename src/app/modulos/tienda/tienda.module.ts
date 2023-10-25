import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { MarcasComponent } from './pages/marcas/marcas.component';


@NgModule({
  declarations: [
    CategoriasComponent,
    MarcasComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
