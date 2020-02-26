import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D62Page } from './d62.page';

const routes: Routes = [
  {
    path: '',
    component: D62Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D62PageRoutingModule {}
