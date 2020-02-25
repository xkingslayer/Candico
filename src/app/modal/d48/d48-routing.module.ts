import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D48Page } from './d48.page';

const routes: Routes = [
  {
    path: '',
    component: D48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D48PageRoutingModule {}
