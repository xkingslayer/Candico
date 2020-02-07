import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R10Page } from './r10.page';

const routes: Routes = [
  {
    path: '',
    component: R10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R10PageRoutingModule {}
