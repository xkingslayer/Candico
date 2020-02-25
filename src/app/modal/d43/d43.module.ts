import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D43PageRoutingModule } from './d43-routing.module';

import { D43Page } from './d43.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D43PageRoutingModule
  ],
  declarations: [D43Page]
})
export class D43PageModule {}
