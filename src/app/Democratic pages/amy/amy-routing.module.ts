import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmyPage } from './amy.page';

const routes: Routes = [
  {
    path: '',
    component: AmyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmyPageRoutingModule {}
