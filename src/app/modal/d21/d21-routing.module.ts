import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D21Page } from './d21.page';

const routes: Routes = [
  {
    path: '',
    component: D21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D21PageRoutingModule {}
