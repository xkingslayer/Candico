import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D18PageRoutingModule } from './d18-routing.module';

import { D18Page } from './d18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D18PageRoutingModule
  ],
  declarations: [D18Page]
})
export class D18PageModule {}
