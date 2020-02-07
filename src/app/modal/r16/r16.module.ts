import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R16PageRoutingModule } from './r16-routing.module';

import { R16Page } from './r16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R16PageRoutingModule
  ],
  declarations: [R16Page]
})
export class R16PageModule {}
