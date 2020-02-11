import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D17PageRoutingModule } from './d17-routing.module';

import { D17Page } from './d17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D17PageRoutingModule
  ],
  declarations: [D17Page]
})
export class D17PageModule {}
