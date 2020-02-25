import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D40PageRoutingModule } from './d40-routing.module';

import { D40Page } from './d40.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D40PageRoutingModule
  ],
  declarations: [D40Page]
})
export class D40PageModule {}
