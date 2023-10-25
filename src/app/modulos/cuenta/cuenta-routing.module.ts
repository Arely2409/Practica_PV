import { RouterModule, Routes } from '@angular/router';

import { DireccionesComponent } from './pages/direcciones/direcciones.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { MetodoPagoComponent } from './pages/metodo-pago/metodo-pago.component';
import { NgModule } from '@angular/core';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
 {
  path:"direcciones",
  component: DireccionesComponent
 },{
  path:"favoritos",
  component: FavoritosComponent
 },{
  path:"metodo-pago",
  component: MetodoPagoComponent
 },{
  path:"pedidos",
  component: PedidosComponent
 },{
  path:"perfil",
  component: PerfilComponent
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuentaRoutingModule { }
