import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D29Page } from './d29.page';

const routes: Routes = [
  {
    path: '',
    component: D29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D29PageRoutingModule {}
