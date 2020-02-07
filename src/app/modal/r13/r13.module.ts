import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R13PageRoutingModule } from './r13-routing.module';

import { R13Page } from './r13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R13PageRoutingModule
  ],
  declarations: [R13Page]
})
export class R13PageModule {}
