import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D14PageRoutingModule } from './d14-routing.module';

import { D14Page } from './d14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D14PageRoutingModule
  ],
  declarations: [D14Page]
})
export class D14PageModule {}
