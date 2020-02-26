import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D64PageRoutingModule } from './d64-routing.module';

import { D64Page } from './d64.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D64PageRoutingModule
  ],
  declarations: [D64Page]
})
export class D64PageModule {}
