import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R21PageRoutingModule } from './r21-routing.module';

import { R21Page } from './r21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R21PageRoutingModule
  ],
  declarations: [R21Page]
})
export class R21PageModule {}
