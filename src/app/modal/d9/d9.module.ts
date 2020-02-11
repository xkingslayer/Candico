import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D9PageRoutingModule } from './d9-routing.module';

import { D9Page } from './d9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D9PageRoutingModule
  ],
  declarations: [D9Page]
})
export class D9PageModule {}
