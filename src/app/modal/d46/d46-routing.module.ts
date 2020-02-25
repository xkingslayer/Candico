import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D46Page } from './d46.page';

const routes: Routes = [
  {
    path: '',
    component: D46Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D46PageRoutingModule {}
