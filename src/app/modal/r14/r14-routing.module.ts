import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R14Page } from './r14.page';

const routes: Routes = [
  {
    path: '',
    component: R14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R14PageRoutingModule {}
