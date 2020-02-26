import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D64Page } from './d64.page';

const routes: Routes = [
  {
    path: '',
    component: D64Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D64PageRoutingModule {}
