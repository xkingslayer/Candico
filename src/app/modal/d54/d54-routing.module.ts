import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D54Page } from './d54.page';

const routes: Routes = [
  {
    path: '',
    component: D54Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D54PageRoutingModule {}
