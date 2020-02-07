import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R16Page } from './r16.page';

const routes: Routes = [
  {
    path: '',
    component: R16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class R16PageRoutingModule {}
