import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D50PageRoutingModule } from './d50-routing.module';

import { D50Page } from './d50.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D50PageRoutingModule
  ],
  declarations: [D50Page]
})
export class D50PageModule {}
