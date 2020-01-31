import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MariPage } from './mari.page';

const routes: Routes = [
  {
    path: '',
    component: MariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MariPageRoutingModule {}
