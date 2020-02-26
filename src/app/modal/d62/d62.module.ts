import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D62PageRoutingModule } from './d62-routing.module';

import { D62Page } from './d62.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D62PageRoutingModule
  ],
  declarations: [D62Page]
})
export class D62PageModule {}
