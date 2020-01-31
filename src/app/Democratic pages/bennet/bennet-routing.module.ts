import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BennetPage } from './bennet.page';

const routes: Routes = [
  {
    path: '',
    component: BennetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BennetPageRoutingModule {}
