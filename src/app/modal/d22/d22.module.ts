import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D22PageRoutingModule } from './d22-routing.module';

import { D22Page } from './d22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D22PageRoutingModule
  ],
  declarations: [D22Page]
})
export class D22PageModule {}
