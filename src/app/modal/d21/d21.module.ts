import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D21PageRoutingModule } from './d21-routing.module';

import { D21Page } from './d21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D21PageRoutingModule
  ],
  declarations: [D21Page]
})
export class D21PageModule {}
