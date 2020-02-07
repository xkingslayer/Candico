import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { R15PageRoutingModule } from './r15-routing.module';

import { R15Page } from './r15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    R15PageRoutingModule
  ],
  declarations: [R15Page]
})
export class R15PageModule {}
