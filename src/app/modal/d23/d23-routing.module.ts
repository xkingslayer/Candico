import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D23Page } from './d23.page';

const routes: Routes = [
  {
    path: '',
    component: D23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D23PageRoutingModule {}
