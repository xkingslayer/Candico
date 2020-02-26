import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D50Page } from './d50.page';

const routes: Routes = [
  {
    path: '',
    component: D50Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D50PageRoutingModule {}
