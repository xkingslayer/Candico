import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R10PageRoutingModule } from './r10-routing.module';

import { R10Page } from './r10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R10PageRoutingModule
  ],
  declarations: [R10Page]
})
export class R10PageModule {}
