import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetePageRoutingModule } from './pete-routing.module';

import { PetePage } from './pete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetePageRoutingModule
  ],
  declarations: [PetePage]
})
export class PetePageModule {}
