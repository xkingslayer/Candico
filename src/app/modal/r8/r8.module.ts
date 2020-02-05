import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R8PageRoutingModule } from './r8-routing.module';

import { R8Page } from './r8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R8PageRoutingModule
  ],
  declarations: [R8Page]
})
export class R8PageModule {}
