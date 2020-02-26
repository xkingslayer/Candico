import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D58Page } from './d58.page';

const routes: Routes = [
  {
    path: '',
    component: D58Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D58PageRoutingModule {}
