import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandersPage } from './sanders.page';

const routes: Routes = [
  {
    path: '',
    component: SandersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SandersPageRoutingModule {}
