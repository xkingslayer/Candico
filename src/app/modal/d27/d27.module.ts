import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D27PageRoutingModule } from './d27-routing.module';

import { D27Page } from './d27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D27PageRoutingModule
  ],
  declarations: [D27Page]
})
export class D27PageModule {}
