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
  {
    path: 'd25',
    loadChildren: () => import('./d25/d25.module').then( m => m.D25PageModule)
  },
  {
    path: 'd26',
    loadChildren: () => import('./d26/d26.module').then( m => m.D26PageModule)
  },
  {
    path: 'd27',
    loadChildren: () => import('./d27/d27.module').then( m => m.D27PageModule)
  },
  {
    path: 'd28',
    loadChildren: () => import('./d28/d28.module').then( m => m.D28PageModule)
  },
  {
    path: 'd29',
    loadChildren: () => import('./d29/d29.module').then( m => m.D29PageModule)
  },
  {
    path: 'd30',
    loadChildren: () => import('./d30/d30.module').then( m => m.D30PageModule)
  },
  {
    path: 'd31',
    loadChildren: () => import('./d31/d31.module').then( m => m.D31PageModule)
  },
  {
    path: 'd32',
    loadChildren: () => import('./d32/d32.module').then( m => m.D32PageModule)
  },
  {
    path: 'd33',
    loadChildren: () => import('./d33/d33.module').then( m => m.D33PageModule)
  },
  {
    path: 'd34',
    loadChildren: () => import('./d34/d34.module').then( m => m.D34PageModule)
  },
  {
    path: 'd35',
    loadChildren: () => import('./d35/d35.module').then( m => m.D35PageModule)
  },
  {
    path: 'd36',
    loadChildren: () => import('./d36/d36.module').then( m => m.D36PageModule)
  },
  {
    path: 'd37',
    loadChildren: () => import('./d37/d37.module').then( m => m.D37PageModule)
  },
  {
    path: 'd38',
    loadChildren: () => import('./d38/d38.module').then( m => m.D38PageModule)
  },
  {
    path: 'd39',
    loadChildren: () => import('./d39/d39.module').then( m => m.D39PageModule)
  },
  {
    path: 'd40',
    loadChildren: () => import('./d40/d40.module').then( m => m.D40PageModule)
  },
  {
    path: 'd41',
    loadChildren: () => import('./d41/d41.module').then( m => m.D41PageModule)
  },
  {
    path: 'd42',
    loadChildren: () => import('./d42/d42.module').then( m => m.D42PageModule)
  },
  {
    path: 'd43',
    loadChildren: () => import('./d43/d43.module').then( m => m.D43PageModule)
  },
  {
    path: 'd44',
    loadChildren: () => import('./d44/d44.module').then( m => m.D44PageModule)
  },
  {
    path: 'd45',
    loadChildren: () => import('./d45/d45.module').then( m => m.D45PageModule)
  },
  {
    path: 'd46',
    loadChildren: () => import('./d46/d46.module').then( m => m.D46PageModule)
  },
  {
    path: 'd47',
    loadChildren: () => import('./d47/d47.module').then( m => m.D47PageModule)
  },
  {
    path: 'd48',
    loadChildren: () => import('./d48/d48.module').then( m => m.D48PageModule)
  },
  {
    path: 'd49',
    loadChildren: () => import('./d49/d49.module').then( m => m.D49PageModule)
  },
  {
    path: 'd50',
    loadChildren: () => import('./d50/d50.module').then( m => m.D50PageModule)
  },
  {
    path: 'd51',
    loadChildren: () => import('./d51/d51.module').then( m => m.D51PageModule)
  },
  {
    path: 'd52',
    loadChildren: () => import('./d52/d52.module').then( m => m.D52PageModule)
  },
  {
    path: 'd53',
    loadChildren: () => import('./d53/d53.module').then( m => m.D53PageModule)
  },
  {
    path: 'd54',
    loadChildren: () => import('./d54/d54.module').then( m => m.D54PageModule)
  },
  {
    path: 'd55',
    loadChildren: () => import('./d55/d55.module').then( m => m.D55PageModule)
  },
  {
    path: 'd56',
    loadChildren: () => import('./d56/d56.module').then( m => m.D56PageModule)
  },
  {
    path: 'd57',
    loadChildren: () => import('./d57/d57.module').then( m => m.D57PageModule)
  },
  {
    path: 'd58',
    loadChildren: () => import('./d58/d58.module').then( m => m.D58PageModule)
  },
  {
    path: 'd59',
    loadChildren: () => import('./d59/d59.module').then( m => m.D59PageModule)
  },
  {
    path: 'd60',
    loadChildren: () => import('./d60/d60.module').then( m => m.D60PageModule)
  },
  {
    path: 'd61',
    loadChildren: () => import('./d61/d61.module').then( m => m.D61PageModule)
  },
  {
    path: 'd62',
    loadChildren: () => import('./d62/d62.module').then( m => m.D62PageModule)
  },
  {
    path: 'd63',
    loadChildren: () => import('./d63/d63.module').then( m => m.D63PageModule)
  },
  {
    path: 'd64',
    loadChildren: () => import('./d64/d64.module').then( m => m.D64PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
