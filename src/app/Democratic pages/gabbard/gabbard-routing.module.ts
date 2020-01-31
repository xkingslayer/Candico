import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GabbardPage } from './gabbard.page';

const routes: Routes = [
  {
    path: '',
    component: GabbardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabbardPageRoutingModule {}
