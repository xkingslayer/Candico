import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D20Page } from './d20.page';

const routes: Routes = [
  {
    path: '',
    component: D20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D20PageRoutingModule {}
