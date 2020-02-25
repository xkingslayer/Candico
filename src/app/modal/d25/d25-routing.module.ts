import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D25Page } from './d25.page';

const routes: Routes = [
  {
    path: '',
    component: D25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D25PageRoutingModule {}
