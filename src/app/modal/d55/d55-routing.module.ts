import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D55Page } from './d55.page';

const routes: Routes = [
  {
    path: '',
    component: D55Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D55PageRoutingModule {}
