import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D46PageRoutingModule } from './d46-routing.module';

import { D46Page } from './d46.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D46PageRoutingModule
  ],
  declarations: [D46Page]
})
export class D46PageModule {}
