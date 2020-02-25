import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D39PageRoutingModule } from './d39-routing.module';

import { D39Page } from './d39.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D39PageRoutingModule
  ],
  declarations: [D39Page]
})
export class D39PageModule {}
