import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D63Page } from './d63.page';

const routes: Routes = [
  {
    path: '',
    component: D63Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D63PageRoutingModule {}
