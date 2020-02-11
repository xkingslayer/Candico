import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D19Page } from './d19.page';

const routes: Routes = [
  {
    path: '',
    component: D19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D19PageRoutingModule {}
