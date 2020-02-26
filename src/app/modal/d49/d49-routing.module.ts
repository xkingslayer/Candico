import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D49Page } from './d49.page';

const routes: Routes = [
  {
    path: '',
    component: D49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D49PageRoutingModule {}
