import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WarrenPage } from './warren.page';

const routes: Routes = [
  {
    path: '',
    component: WarrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WarrenPageRoutingModule {}
