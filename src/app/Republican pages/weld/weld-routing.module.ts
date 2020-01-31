import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeldPage } from './weld.page';

const routes: Routes = [
  {
    path: '',
    component: WeldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeldPageRoutingModule {}
