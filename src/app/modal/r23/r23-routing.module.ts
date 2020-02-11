import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R23Page } from './r23.page';

const routes: Routes = [
  {
    path: '',
    component: R23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R23PageRoutingModule {}
