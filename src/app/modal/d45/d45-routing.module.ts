import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D45Page } from './d45.page';

const routes: Routes = [
  {
    path: '',
    component: D45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D45PageRoutingModule {}
