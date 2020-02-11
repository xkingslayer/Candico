import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D7PageRoutingModule } from './d7-routing.module';

import { D7Page } from './d7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D7PageRoutingModule
  ],
  declarations: [D7Page]
})
export class D7PageModule {}
