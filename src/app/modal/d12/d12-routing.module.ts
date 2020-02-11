import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D12Page } from './d12.page';

const routes: Routes = [
  {
    path: '',
    component: D12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D12PageRoutingModule {}
