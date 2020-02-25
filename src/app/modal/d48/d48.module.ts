import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D48PageRoutingModule } from './d48-routing.module';

import { D48Page } from './d48.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D48PageRoutingModule
  ],
  declarations: [D48Page]
})
export class D48PageModule {}
