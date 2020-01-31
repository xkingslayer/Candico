import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BennetPageRoutingModule } from './bennet-routing.module';

import { BennetPage } from './bennet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BennetPageRoutingModule
  ],
  declarations: [BennetPage]
})
export class BennetPageModule {}
