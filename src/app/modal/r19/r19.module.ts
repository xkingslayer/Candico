import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R19PageRoutingModule } from './r19-routing.module';

import { R19Page } from './r19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R19PageRoutingModule
  ],
  declarations: [R19Page]
})
export class R19PageModule {}
