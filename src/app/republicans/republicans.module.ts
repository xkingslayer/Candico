import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepublicansPageRoutingModule } from './republicans-routing.module';

import { RepublicansPage } from './republicans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepublicansPageRoutingModule
  ],
  declarations: [RepublicansPage]
})
export class RepublicansPageModule {}
