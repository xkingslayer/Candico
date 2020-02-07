import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R11PageRoutingModule } from './r11-routing.module';

import { R11Page } from './r11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R11PageRoutingModule
  ],
  declarations: [R11Page]
})
export class R11PageModule {}
