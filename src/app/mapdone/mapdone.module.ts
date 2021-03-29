import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapdonePageRoutingModule } from './mapdone-routing.module';

import { MapdonePage } from './mapdone.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapdonePageRoutingModule
  ],
  declarations: [MapdonePage]
})
export class MapdonePageModule {}
