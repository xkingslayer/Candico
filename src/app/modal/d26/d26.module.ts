import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D26PageRoutingModule } from './d26-routing.module';

import { D26Page } from './d26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D26PageRoutingModule
  ],
  declarations: [D26Page]
})
export class D26PageModule {}
