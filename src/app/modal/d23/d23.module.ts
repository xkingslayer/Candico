import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D23PageRoutingModule } from './d23-routing.module';

import { D23Page } from './d23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D23PageRoutingModule
  ],
  declarations: [D23Page]
})
export class D23PageModule {}
