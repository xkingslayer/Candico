import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R18Page } from './r18.page';

const routes: Routes = [
  {
    path: '',
    component: R18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R18PageRoutingModule {}
