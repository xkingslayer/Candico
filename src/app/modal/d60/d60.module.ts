import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D60PageRoutingModule } from './d60-routing.module';

import { D60Page } from './d60.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D60PageRoutingModule
  ],
  declarations: [D60Page]
})
export class D60PageModule {}
