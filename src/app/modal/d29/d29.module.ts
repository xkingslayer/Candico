import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D29PageRoutingModule } from './d29-routing.module';

import { D29Page } from './d29.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D29PageRoutingModule
  ],
  declarations: [D29Page]
})
export class D29PageModule {}
