import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassagemAereaPageRoutingModule } from './passagem-aerea-routing.module';

import { PassagemAereaPage } from './passagem-aerea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassagemAereaPageRoutingModule
  ],
  declarations: [PassagemAereaPage]
})
export class PassagemAereaPageModule {}
