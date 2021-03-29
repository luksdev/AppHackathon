import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolhaCarPage } from './escolha-car.page';

const routes: Routes = [
  {
    path: '',
    component: EscolhaCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolhaCarPageRoutingModule {}
