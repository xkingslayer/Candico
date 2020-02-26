import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D59PageRoutingModule } from './d59-routing.module';

import { D59Page } from './d59.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D59PageRoutingModule
  ],
  declarations: [D59Page]
})
export class D59PageModule {}
