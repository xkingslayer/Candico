import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R22PageRoutingModule } from './r22-routing.module';

import { R22Page } from './r22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R22PageRoutingModule
  ],
  declarations: [R22Page]
})
export class R22PageModule {}
