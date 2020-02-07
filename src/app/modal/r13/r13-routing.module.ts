import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R13Page } from './r13.page';

const routes: Routes = [
  {
    path: '',
    component: R13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R13PageRoutingModule {}
