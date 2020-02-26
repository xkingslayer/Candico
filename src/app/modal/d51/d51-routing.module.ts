import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D51Page } from './d51.page';

const routes: Routes = [
  {
    path: '',
    component: D51Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D51PageRoutingModule {}
