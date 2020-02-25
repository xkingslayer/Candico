import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D41PageRoutingModule } from './d41-routing.module';

import { D41Page } from './d41.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D41PageRoutingModule
  ],
  declarations: [D41Page]
})
export class D41PageModule {}
