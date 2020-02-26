import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D58PageRoutingModule } from './d58-routing.module';

import { D58Page } from './d58.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D58PageRoutingModule
  ],
  declarations: [D58Page]
})
export class D58PageModule {}
