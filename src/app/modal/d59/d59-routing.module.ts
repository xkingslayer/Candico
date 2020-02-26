import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D59Page } from './d59.page';

const routes: Routes = [
  {
    path: '',
    component: D59Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D59PageRoutingModule {}
