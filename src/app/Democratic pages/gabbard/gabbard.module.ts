import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GabbardPageRoutingModule } from './gabbard-routing.module';

import { GabbardPage } from './gabbard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabbardPageRoutingModule
  ],
  declarations: [GabbardPage]
})
export class GabbardPageModule {}
