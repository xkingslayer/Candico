import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R8Page } from './r8.page';

const routes: Routes = [
  {
    path: '',
    component: R8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R8PageRoutingModule {}
