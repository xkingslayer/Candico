import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D60Page } from './d60.page';

const routes: Routes = [
  {
    path: '',
    component: D60Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D60PageRoutingModule {}
