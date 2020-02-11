import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D18Page } from './d18.page';

const routes: Routes = [
  {
    path: '',
    component: D18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D18PageRoutingModule {}
