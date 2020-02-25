import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D28PageRoutingModule } from './d28-routing.module';

import { D28Page } from './d28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D28PageRoutingModule
  ],
  declarations: [D28Page]
})
export class D28PageModule {}
