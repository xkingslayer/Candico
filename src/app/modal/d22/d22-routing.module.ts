import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D22Page } from './d22.page';

const routes: Routes = [
  {
    path: '',
    component: D22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D22PageRoutingModule {}
