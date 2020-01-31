import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MariPageRoutingModule } from './mari-routing.module';

import { MariPage } from './mari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MariPageRoutingModule
  ],
  declarations: [MariPage]
})
export class MariPageModule {}
