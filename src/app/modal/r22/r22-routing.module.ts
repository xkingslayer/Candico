import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R22Page } from './r22.page';

const routes: Routes = [
  {
    path: '',
    component: R22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R22PageRoutingModule {}
