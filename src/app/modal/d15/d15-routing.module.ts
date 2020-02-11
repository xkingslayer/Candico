import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D15Page } from './d15.page';

const routes: Routes = [
  {
    path: '',
    component: D15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D15PageRoutingModule {}
