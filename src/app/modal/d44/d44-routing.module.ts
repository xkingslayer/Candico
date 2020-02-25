import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D44Page } from './d44.page';

const routes: Routes = [
  {
    path: '',
    component: D44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D44PageRoutingModule {}
