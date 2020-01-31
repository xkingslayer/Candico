import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetePage } from './pete.page';

const routes: Routes = [
  {
    path: '',
    component: PetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetePageRoutingModule {}
