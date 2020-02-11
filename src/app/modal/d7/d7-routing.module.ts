import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D7Page } from './d7.page';

const routes: Routes = [
  {
    path: '',
    component: D7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D7PageRoutingModule {}
