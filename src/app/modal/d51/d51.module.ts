import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D51PageRoutingModule } from './d51-routing.module';

import { D51Page } from './d51.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D51PageRoutingModule
  ],
  declarations: [D51Page]
})
export class D51PageModule {}
