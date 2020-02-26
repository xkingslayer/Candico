import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D54PageRoutingModule } from './d54-routing.module';

import { D54Page } from './d54.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D54PageRoutingModule
  ],
  declarations: [D54Page]
})
export class D54PageModule {}
