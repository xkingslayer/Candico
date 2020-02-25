import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D34PageRoutingModule } from './d34-routing.module';

import { D34Page } from './d34.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D34PageRoutingModule
  ],
  declarations: [D34Page]
})
export class D34PageModule {}
