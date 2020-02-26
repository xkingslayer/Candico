import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D56PageRoutingModule } from './d56-routing.module';

import { D56Page } from './d56.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D56PageRoutingModule
  ],
  declarations: [D56Page]
})
export class D56PageModule {}
