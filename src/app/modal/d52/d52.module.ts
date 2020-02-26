import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { D52PageRoutingModule } from './d52-routing.module';

import { D52Page } from './d52.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    D52PageRoutingModule
  ],
  declarations: [D52Page]
})
export class D52PageModule {}
