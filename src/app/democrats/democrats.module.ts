import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemocratsPageRoutingModule } from './democrats-routing.module';

import { DemocratsPage } from './democrats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemocratsPageRoutingModule
  ],
  declarations: [DemocratsPage]
})
export class DemocratsPageModule {}
