import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D37Page } from './d37.page';

const routes: Routes = [
  {
    path: '',
    component: D37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D37PageRoutingModule {}
