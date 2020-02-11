import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R21Page } from './r21.page';

const routes: Routes = [
  {
    path: '',
    component: R21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R21PageRoutingModule {}
