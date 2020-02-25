import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D31PageRoutingModule } from './d31-routing.module';

import { D31Page } from './d31.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D31PageRoutingModule
  ],
  declarations: [D31Page]
})
export class D31PageModule {}
