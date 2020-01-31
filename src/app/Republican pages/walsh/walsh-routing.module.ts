import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalshPage } from './walsh.page';

const routes: Routes = [
  {
    path: '',
    component: WalshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalshPageRoutingModule {}
