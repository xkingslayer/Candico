import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { D52Page } from './d52.page';

const routes: Routes = [
  {
    path: '',
    component: D52Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class D52PageRoutingModule {}
