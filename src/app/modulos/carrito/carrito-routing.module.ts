import { RouterModule, Routes } from '@angular/router';

import { CarritoComponent } from './pages/carrito/carrito.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: "",
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
