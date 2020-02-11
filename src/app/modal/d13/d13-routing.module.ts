import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D13Page } from './d13.page';

const routes: Routes = [
  {
    path: '',
    component: D13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D13PageRoutingModule {}
