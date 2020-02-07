import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R12PageRoutingModule } from './r12-routing.module';

import { R12Page } from './r12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R12PageRoutingModule
  ],
  declarations: [R12Page]
})
export class R12PageModule {}
