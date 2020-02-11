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
  },  {
    path: 'd1',
    loadChildren: () => import('./d1/d1.module').then( m => m.D1PageModule)
  },
  {
    path: 'd2',
    loadChildren: () => import('./d2/d2.module').then( m => m.D2PageModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./d3/d3.module').then( m => m.D3PageModule)
  },
  {
    path: 'd4',
    loadChildren: () => import('./d4/d4.module').then( m => m.D4PageModule)
  },
  {
    path: 'd5',
    loadChildren: () => import('./d5/d5.module').then( m => m.D5PageModule)
  },
  {
    path: 'd6',
    loadChildren: () => import('./d6/d6.module').then( m => m.D6PageModule)
  },
  {
    path: 'd7',
    loadChildren: () => import('./d7/d7.module').then( m => m.D7PageModule)
  },
  {
    path: 'd8',
    loadChildren: () => import('./d8/d8.module').then( m => m.D8PageModule)
  },
  {
    path: 'd9',
    loadChildren: () => import('./d9/d9.module').then( m => m.D9PageModule)
  },
  {
    path: 'd10',
    loadChildren: () => import('./d10/d10.module').then( m => m.D10PageModule)
  },
  {
    path: 'd11',
    loadChildren: () => import('./d11/d11.module').then( m => m.D11PageModule)
  },
  {
    path: 'd12',
    loadChildren: () => import('./d12/d12.module').then( m => m.D12PageModule)
  },
  {
    path: 'd13',
    loadChildren: () => import('./d13/d13.module').then( m => m.D13PageModule)
  },
  {
    path: 'd14',
    loadChildren: () => import('./d14/d14.module').then( m => m.D14PageModule)
  },
  {
    path: 'd15',
    loadChildren: () => import('./d15/d15.module').then( m => m.D15PageModule)
  },
  {
    path: 'd16',
    loadChildren: () => import('./d16/d16.module').then( m => m.D16PageModule)
  },
  {
    path: 'd17',
    loadChildren: () => import('./d17/d17.module').then( m => m.D17PageModule)
  },
  {
    path: 'd18',
    loadChildren: () => import('./d18/d18.module').then( m => m.D18PageModule)
  },
  {
    path: 'd19',
    loadChildren: () => import('./d19/d19.module').then( m => m.D19PageModule)
  },
  {
    path: 'd20',
    loadChildren: () => import('./d20/d20.module').then( m => m.D20PageModule)
  },
  {
    path: 'd21',
    loadChildren: () => import('./d21/d21.module').then( m => m.D21PageModule)
  },
  {
    path: 'd22',
    loadChildren: () => import('./d22/d22.module').then( m => m.D22PageModule)
  },
  {
    path: 'd23',
    loadChildren: () => import('./d23/d23.module').then( m => m.D23PageModule)
  },
  {
    path: 'd24',
    loadChildren: () => import('./d24/d24.module').then( m => m.D24PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
