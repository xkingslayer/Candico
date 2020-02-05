import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R9PageRoutingModule } from './r9-routing.module';

import { R9Page } from './r9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R9PageRoutingModule
  ],
  declarations: [R9Page]
})
export class R9PageModule {}
