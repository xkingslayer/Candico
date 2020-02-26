import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D61PageRoutingModule } from './d61-routing.module';

import { D61Page } from './d61.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D61PageRoutingModule
  ],
  declarations: [D61Page]
})
export class D61PageModule {}
