import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookerPageRoutingModule } from './booker-routing.module';

import { BookerPage } from './booker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookerPageRoutingModule
  ],
  declarations: [BookerPage]
})
export class BookerPageModule {}
