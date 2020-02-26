import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D56Page } from './d56.page';

const routes: Routes = [
  {
    path: '',
    component: D56Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D56PageRoutingModule {}
