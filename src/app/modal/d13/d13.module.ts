import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D13PageRoutingModule } from './d13-routing.module';

import { D13Page } from './d13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D13PageRoutingModule
  ],
  declarations: [D13Page]
})
export class D13PageModule {}
