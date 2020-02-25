import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D45PageRoutingModule } from './d45-routing.module';

import { D45Page } from './d45.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D45PageRoutingModule
  ],
  declarations: [D45Page]
})
export class D45PageModule {}
