import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R14PageRoutingModule } from './r14-routing.module';

import { R14Page } from './r14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R14PageRoutingModule
  ],
  declarations: [R14Page]
})
export class R14PageModule {}
