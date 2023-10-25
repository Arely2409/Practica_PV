import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentaRoutingModule } from './cuenta-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DireccionesComponent } from './pages/direcciones/direcciones.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';


@NgModule({
  declarations: [
    PerfilComponent,
    DireccionesComponent,
    PedidosComponent,
    FavoritosComponent,
    MetodoPagoComponent
  ],
  imports: [
    CommonModule,
    CuentaRoutingModule
  ]
})
export class CuentaModule { }
