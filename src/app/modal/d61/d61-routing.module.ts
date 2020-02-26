import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D61Page } from './d61.page';

const routes: Routes = [
  {
    path: '',
    component: D61Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D61PageRoutingModule {}
