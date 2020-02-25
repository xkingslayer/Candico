import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D28Page } from './d28.page';

const routes: Routes = [
  {
    path: '',
    component: D28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D28PageRoutingModule {}
