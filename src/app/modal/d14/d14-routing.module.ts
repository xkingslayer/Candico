import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D14Page } from './d14.page';

const routes: Routes = [
  {
    path: '',
    component: D14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D14PageRoutingModule {}
