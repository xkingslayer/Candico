import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D24PageRoutingModule } from './d24-routing.module';

import { D24Page } from './d24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D24PageRoutingModule
  ],
  declarations: [D24Page]
})
export class D24PageModule {}
