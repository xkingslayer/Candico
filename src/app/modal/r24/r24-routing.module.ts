import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R24Page } from './r24.page';

const routes: Routes = [
  {
    path: '',
    component: R24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R24PageRoutingModule {}
