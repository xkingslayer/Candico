import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidenPageRoutingModule } from './biden-routing.module';

import { BidenPage } from './biden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidenPageRoutingModule
  ],
  declarations: [BidenPage]
})
export class BidenPageModule {}
