import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D39Page } from './d39.page';

const routes: Routes = [
  {
    path: '',
    component: D39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D39PageRoutingModule {}
