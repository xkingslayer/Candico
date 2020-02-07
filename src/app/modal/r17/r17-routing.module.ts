import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R17Page } from './r17.page';

const routes: Routes = [
  {
    path: '',
    component: R17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R17PageRoutingModule {}
