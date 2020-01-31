import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidenPage } from './biden.page';

const routes: Routes = [
  {
    path: '',
    component: BidenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidenPageRoutingModule {}
