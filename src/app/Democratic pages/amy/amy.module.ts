import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmyPageRoutingModule } from './amy-routing.module';

import { AmyPage } from './amy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmyPageRoutingModule
  ],
  declarations: [AmyPage]
})
export class AmyPageModule {}
