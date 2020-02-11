import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D11Page } from './d11.page';

const routes: Routes = [
  {
    path: '',
    component: D11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D11PageRoutingModule {}
