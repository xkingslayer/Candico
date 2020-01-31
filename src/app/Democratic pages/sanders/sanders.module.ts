import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SandersPageRoutingModule } from './sanders-routing.module';

import { SandersPage } from './sanders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SandersPageRoutingModule
  ],
  declarations: [SandersPage]
})
export class SandersPageModule {}
