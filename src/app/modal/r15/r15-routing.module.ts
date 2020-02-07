import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R15Page } from './r15.page';

const routes: Routes = [
  {
    path: '',
    component: R15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R15PageRoutingModule {}
