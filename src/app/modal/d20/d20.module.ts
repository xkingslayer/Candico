import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D20PageRoutingModule } from './d20-routing.module';

import { D20Page } from './d20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D20PageRoutingModule
  ],
  declarations: [D20Page]
})
export class D20PageModule {}
