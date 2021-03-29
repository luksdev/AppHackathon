import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapdonePage } from './mapdone.page';

const routes: Routes = [
  {
    path: '',
    component: MapdonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapdonePageRoutingModule {}
