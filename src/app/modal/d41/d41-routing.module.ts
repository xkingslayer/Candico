import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D41Page } from './d41.page';

const routes: Routes = [
  {
    path: '',
    component: D41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D41PageRoutingModule {}
