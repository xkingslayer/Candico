import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R20PageRoutingModule } from './r20-routing.module';

import { R20Page } from './r20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R20PageRoutingModule
  ],
  declarations: [R20Page]
})
export class R20PageModule {}
