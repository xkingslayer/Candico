import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndependantsPageRoutingModule } from './independants-routing.module';

import { IndependantsPage } from './independants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndependantsPageRoutingModule
  ],
  declarations: [IndependantsPage]
})
export class IndependantsPageModule {}
