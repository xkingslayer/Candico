import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D43Page } from './d43.page';

const routes: Routes = [
  {
    path: '',
    component: D43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D43PageRoutingModule {}
