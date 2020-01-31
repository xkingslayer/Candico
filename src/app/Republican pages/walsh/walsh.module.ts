import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalshPageRoutingModule } from './walsh-routing.module';

import { WalshPage } from './walsh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalshPageRoutingModule
  ],
  declarations: [WalshPage]
})
export class WalshPageModule {}
