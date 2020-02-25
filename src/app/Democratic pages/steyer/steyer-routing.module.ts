import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SteyerPage } from './steyer.page';

const routes: Routes = [
  {
    path: '',
    component: SteyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SteyerPageRoutingModule {}
