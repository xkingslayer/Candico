import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R7PageRoutingModule } from './r7-routing.module';

import { R7Page } from './r7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R7PageRoutingModule
  ],
  declarations: [R7Page]
})
export class R7PageModule {}
