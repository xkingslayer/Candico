import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D12PageRoutingModule } from './d12-routing.module';

import { D12Page } from './d12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D12PageRoutingModule
  ],
  declarations: [D12Page]
})
export class D12PageModule {}
