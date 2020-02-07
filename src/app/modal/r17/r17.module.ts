import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R17PageRoutingModule } from './r17-routing.module';

import { R17Page } from './r17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R17PageRoutingModule
  ],
  declarations: [R17Page]
})
export class R17PageModule {}
