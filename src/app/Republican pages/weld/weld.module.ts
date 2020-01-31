import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeldPageRoutingModule } from './weld-routing.module';

import { WeldPage } from './weld.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeldPageRoutingModule
  ],
  declarations: [WeldPage]
})
export class WeldPageModule {}
