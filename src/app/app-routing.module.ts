import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import ("./modulos/home/home.module").then(m=>m.HomeModule)
  },{
    path:"tienda",
    loadChildren: () => import ("./modulos/tienda/tienda.module").then(m=>m.TiendaModule)
  },{
    path:"cuenta",
    loadChildren: () => import ("./modulos/cuenta/cuenta.module").then(m=>m.CuentaModule)
  },{
    path:"sucursales",
    loadChildren: () => import ("./modulos/sucursales/sucursales.module").then(m=>m.SucursalesModule)
  },{
    path:"carrito",
    loadChildren: () => import ("./modulos/carrito/carrito.module").then(m=>m.CarritoModule)
  },
  {
    path: "**", 
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
