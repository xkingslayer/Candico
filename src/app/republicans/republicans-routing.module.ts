import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepublicansPage } from './republicans.page';

const routes: Routes = [
  {
    path: '',
    component: RepublicansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepublicansPageRoutingModule {}
