import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D25PageRoutingModule } from './d25-routing.module';

import { D25Page } from './d25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D25PageRoutingModule
  ],
  declarations: [D25Page]
})
export class D25PageModule {}
