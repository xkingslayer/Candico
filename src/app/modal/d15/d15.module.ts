import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D15PageRoutingModule } from './d15-routing.module';

import { D15Page } from './d15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D15PageRoutingModule
  ],
  declarations: [D15Page]
})
export class D15PageModule {}
