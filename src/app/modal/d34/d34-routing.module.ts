import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D34Page } from './d34.page';

const routes: Routes = [
  {
    path: '',
    component: D34Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D34PageRoutingModule {}
