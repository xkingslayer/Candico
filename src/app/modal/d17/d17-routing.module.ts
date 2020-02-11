import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D17Page } from './d17.page';

const routes: Routes = [
  {
    path: '',
    component: D17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D17PageRoutingModule {}
