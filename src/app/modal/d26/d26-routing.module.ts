import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D26Page } from './d26.page';

const routes: Routes = [
  {
    path: '',
    component: D26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D26PageRoutingModule {}
