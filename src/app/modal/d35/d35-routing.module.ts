import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D35Page } from './d35.page';

const routes: Routes = [
  {
    path: '',
    component: D35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D35PageRoutingModule {}
