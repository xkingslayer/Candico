import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R18PageRoutingModule } from './r18-routing.module';

import { R18Page } from './r18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R18PageRoutingModule
  ],
  declarations: [R18Page]
})
export class R18PageModule {}
