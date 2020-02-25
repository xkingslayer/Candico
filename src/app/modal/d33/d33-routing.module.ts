import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D33Page } from './d33.page';

const routes: Routes = [
  {
    path: '',
    component: D33Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D33PageRoutingModule {}
