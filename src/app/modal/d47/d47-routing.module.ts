import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D47Page } from './d47.page';

const routes: Routes = [
  {
    path: '',
    component: D47Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D47PageRoutingModule {}
