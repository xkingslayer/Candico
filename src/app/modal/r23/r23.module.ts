import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R23PageRoutingModule } from './r23-routing.module';

import { R23Page } from './r23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R23PageRoutingModule
  ],
  declarations: [R23Page]
})
export class R23PageModule {}
