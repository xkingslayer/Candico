import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R24PageRoutingModule } from './r24-routing.module';

import { R24Page } from './r24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R24PageRoutingModule
  ],
  declarations: [R24Page]
})
export class R24PageModule {}
