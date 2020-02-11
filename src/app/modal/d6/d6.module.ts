import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D6PageRoutingModule } from './d6-routing.module';

import { D6Page } from './d6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D6PageRoutingModule
  ],
  declarations: [D6Page]
})
export class D6PageModule {}
