import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R20Page } from './r20.page';

const routes: Routes = [
  {
    path: '',
    component: R20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R20PageRoutingModule {}
