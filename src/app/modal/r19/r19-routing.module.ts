import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R19Page } from './r19.page';

const routes: Routes = [
  {
    path: '',
    component: R19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R19PageRoutingModule {}
