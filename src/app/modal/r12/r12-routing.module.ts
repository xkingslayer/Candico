import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R12Page } from './r12.page';

const routes: Routes = [
  {
    path: '',
    component: R12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R12PageRoutingModule {}
