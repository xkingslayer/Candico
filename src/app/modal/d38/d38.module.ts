import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D38PageRoutingModule } from './d38-routing.module';

import { D38Page } from './d38.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D38PageRoutingModule
  ],
  declarations: [D38Page]
})
export class D38PageModule {}
