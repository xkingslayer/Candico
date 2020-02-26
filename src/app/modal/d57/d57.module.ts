import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D57PageRoutingModule } from './d57-routing.module';

import { D57Page } from './d57.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D57PageRoutingModule
  ],
  declarations: [D57Page]
})
export class D57PageModule {}
