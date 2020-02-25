import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D42PageRoutingModule } from './d42-routing.module';

import { D42Page } from './d42.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D42PageRoutingModule
  ],
  declarations: [D42Page]
})
export class D42PageModule {}
