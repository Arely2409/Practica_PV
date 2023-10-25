import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';

const routes: Routes = [
  {
    path: "",
    component: SucursalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
