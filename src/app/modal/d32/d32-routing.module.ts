import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D32Page } from './d32.page';

const routes: Routes = [
  {
    path: '',
    component: D32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D32PageRoutingModule {}
