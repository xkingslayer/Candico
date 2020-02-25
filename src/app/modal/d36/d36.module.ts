import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D36PageRoutingModule } from './d36-routing.module';

import { D36Page } from './d36.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D36PageRoutingModule
  ],
  declarations: [D36Page]
})
export class D36PageModule {}
