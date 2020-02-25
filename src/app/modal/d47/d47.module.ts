import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D47PageRoutingModule } from './d47-routing.module';

import { D47Page } from './d47.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D47PageRoutingModule
  ],
  declarations: [D47Page]
})
export class D47PageModule {}
