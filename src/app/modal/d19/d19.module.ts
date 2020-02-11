import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D19PageRoutingModule } from './d19-routing.module';

import { D19Page } from './d19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D19PageRoutingModule
  ],
  declarations: [D19Page]
})
export class D19PageModule {}
