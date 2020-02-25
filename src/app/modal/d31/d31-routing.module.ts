import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D31Page } from './d31.page';

const routes: Routes = [
  {
    path: '',
    component: D31Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D31PageRoutingModule {}
