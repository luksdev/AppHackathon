import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolhaCarPageRoutingModule } from './escolha-car-routing.module';

import { EscolhaCarPage } from './escolha-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolhaCarPageRoutingModule
  ],
  declarations: [EscolhaCarPage]
})
export class EscolhaCarPageModule {}
