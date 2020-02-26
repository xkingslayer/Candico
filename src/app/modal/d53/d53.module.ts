import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D53PageRoutingModule } from './d53-routing.module';

import { D53Page } from './d53.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D53PageRoutingModule
  ],
  declarations: [D53Page]
})
export class D53PageModule {}
