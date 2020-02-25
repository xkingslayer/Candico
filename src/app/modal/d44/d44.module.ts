import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D44PageRoutingModule } from './d44-routing.module';

import { D44Page } from './d44.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D44PageRoutingModule
  ],
  declarations: [D44Page]
})
export class D44PageModule {}
