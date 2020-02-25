import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D38Page } from './d38.page';

const routes: Routes = [
  {
    path: '',
    component: D38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D38PageRoutingModule {}
