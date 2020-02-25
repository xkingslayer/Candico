import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D40Page } from './d40.page';

const routes: Routes = [
  {
    path: '',
    component: D40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D40PageRoutingModule {}
