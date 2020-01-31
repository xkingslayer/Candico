import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WarrenPageRoutingModule } from './warren-routing.module';

import { WarrenPage } from './warren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WarrenPageRoutingModule
  ],
  declarations: [WarrenPage]
})
export class WarrenPageModule {}
