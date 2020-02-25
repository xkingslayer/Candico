import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D35PageRoutingModule } from './d35-routing.module';

import { D35Page } from './d35.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D35PageRoutingModule
  ],
  declarations: [D35Page]
})
export class D35PageModule {}
