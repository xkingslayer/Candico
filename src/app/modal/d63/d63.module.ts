import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D63PageRoutingModule } from './d63-routing.module';

import { D63Page } from './d63.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D63PageRoutingModule
  ],
  declarations: [D63Page]
})
export class D63PageModule {}
