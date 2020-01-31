import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatrickPageRoutingModule } from './patrick-routing.module';

import { PatrickPage } from './patrick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatrickPageRoutingModule
  ],
  declarations: [PatrickPage]
})
export class PatrickPageModule {}
