import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D32PageRoutingModule } from './d32-routing.module';

import { D32Page } from './d32.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D32PageRoutingModule
  ],
  declarations: [D32Page]
})
export class D32PageModule {}
