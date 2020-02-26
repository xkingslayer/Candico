import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D49PageRoutingModule } from './d49-routing.module';

import { D49Page } from './d49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D49PageRoutingModule
  ],
  declarations: [D49Page]
})
export class D49PageModule {}
