import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D42Page } from './d42.page';

const routes: Routes = [
  {
    path: '',
    component: D42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D42PageRoutingModule {}
