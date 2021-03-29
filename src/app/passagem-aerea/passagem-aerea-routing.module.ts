import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassagemAereaPage } from './passagem-aerea.page';

const routes: Routes = [
  {
    path: '',
    component: PassagemAereaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassagemAereaPageRoutingModule {}
