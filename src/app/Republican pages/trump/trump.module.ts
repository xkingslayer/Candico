import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrumpPageRoutingModule } from './trump-routing.module';

import { TrumpPage } from './trump.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrumpPageRoutingModule
  ],
  declarations: [TrumpPage]
})
export class TrumpPageModule {}
