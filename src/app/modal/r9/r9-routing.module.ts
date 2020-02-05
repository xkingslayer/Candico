import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R9Page } from './r9.page';

const routes: Routes = [
  {
    path: '',
    component: R9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R9PageRoutingModule {}
