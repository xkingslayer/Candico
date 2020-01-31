import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndependantsPage } from './independants.page';

const routes: Routes = [
  {
    path: '',
    component: IndependantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndependantsPageRoutingModule {}
