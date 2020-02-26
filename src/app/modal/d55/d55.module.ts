import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D55PageRoutingModule } from './d55-routing.module';

import { D55Page } from './d55.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D55PageRoutingModule
  ],
  declarations: [D55Page]
})
export class D55PageModule {}
