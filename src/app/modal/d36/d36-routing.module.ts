import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D36Page } from './d36.page';

const routes: Routes = [
  {
    path: '',
    component: D36Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D36PageRoutingModule {}
