import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D6Page } from './d6.page';

const routes: Routes = [
  {
    path: '',
    component: D6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D6PageRoutingModule {}
