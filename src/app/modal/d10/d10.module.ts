import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D10PageRoutingModule } from './d10-routing.module';

import { D10Page } from './d10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D10PageRoutingModule
  ],
  declarations: [D10Page]
})
export class D10PageModule {}
