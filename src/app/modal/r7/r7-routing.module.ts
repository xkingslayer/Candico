import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R7Page } from './r7.page';

const routes: Routes = [
  {
    path: '',
    component: R7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R7PageRoutingModule {}
