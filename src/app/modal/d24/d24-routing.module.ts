import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D24Page } from './d24.page';

const routes: Routes = [
  {
    path: '',
    component: D24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D24PageRoutingModule {}
