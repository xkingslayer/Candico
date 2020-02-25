import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SteyerPageRoutingModule } from './steyer-routing.module';

import { SteyerPage } from './steyer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SteyerPageRoutingModule
  ],
  declarations: [SteyerPage]
})
export class SteyerPageModule {}
