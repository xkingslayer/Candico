import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemocratsPage } from './democrats.page';

const routes: Routes = [
  {
    path: '',
    component: DemocratsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemocratsPageRoutingModule {}
