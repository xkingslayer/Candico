import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D11PageRoutingModule } from './d11-routing.module';

import { D11Page } from './d11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D11PageRoutingModule
  ],
  declarations: [D11Page]
})
export class D11PageModule {}
