import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPage } from './modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  },
  {
    path: 'r10',
    loadChildren: () => import('./r10/r10.module').then( m => m.R10PageModule)
  },
  {
    path: 'r11',
    loadChildren: () => import('./r11/r11.module').then( m => m.R11PageModule)
  },
  {
    path: 'r12',
    loadChildren: () => import('./r12/r12.module').then( m => m.R12PageModule)
  },
  {
    path: 'r13',
    loadChildren: () => import('./r13/r13.module').then( m => m.R13PageModule)
  },
  {
    path: 'r14',
    loadChildren: () => import('./r14/r14.module').then( m => m.R14PageModule)
  },
  {
    path: 'r15',
    loadChildren: () => import('./r15/r15.module').then( m => m.R15PageModule)
  },
  {
    path: 'r16',
    loadChildren: () => import('./r16/r16.module').then( m => m.R16PageModule)
  },
  {
    path: 'r17',
    loadChildren: () => import('./r17/r17.module').then( m => m.R17PageModule)
  },
  {
    path: 'r18',
    loadChildren: () => import('./r18/r18.module').then( m => m.R18PageModule)
  },
  {
    path: 'r19',
    loadChildren: () => import('./r19/r19.module').then( m => m.R19PageModule)
  },
  {
    path: 'r20',
    loadChildren: () => import('./r20/r20.module').then( m => m.R20PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
