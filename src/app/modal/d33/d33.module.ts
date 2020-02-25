import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D33PageRoutingModule } from './d33-routing.module';

import { D33Page } from './d33.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D33PageRoutingModule
  ],
  declarations: [D33Page]
})
export class D33PageModule {}
