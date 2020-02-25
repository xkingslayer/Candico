import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D30Page } from './d30.page';

const routes: Routes = [
  {
    path: '',
    component: D30Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D30PageRoutingModule {}
