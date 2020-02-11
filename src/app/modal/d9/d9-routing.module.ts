import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D9Page } from './d9.page';

const routes: Routes = [
  {
    path: '',
    component: D9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D9PageRoutingModule {}
