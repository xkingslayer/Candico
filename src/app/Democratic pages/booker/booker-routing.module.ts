import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookerPage } from './booker.page';

const routes: Routes = [
  {
    path: '',
    component: BookerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookerPageRoutingModule {}
