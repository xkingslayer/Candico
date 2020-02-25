import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D37PageRoutingModule } from './d37-routing.module';

import { D37Page } from './d37.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D37PageRoutingModule
  ],
  declarations: [D37Page]
})
export class D37PageModule {}
