import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D30PageRoutingModule } from './d30-routing.module';

import { D30Page } from './d30.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D30PageRoutingModule
  ],
  declarations: [D30Page]
})
export class D30PageModule {}
