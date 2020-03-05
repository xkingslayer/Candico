import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'republicans', loadChildren: () => import('./republicans/republicans.module').then( m => m.RepublicansPageModule)
  },
  {
    path: 'democrats',
    loadChildren: () => import('./democrats/democrats.module').then( m => m.DemocratsPageModule)
  },
  {
    path: 'independants',
    loadChildren: () => import('./independants/independants.module').then( m => m.IndependantsPageModule)
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then( m => m.OthersPageModule)
  },
  {
    path: 'trump',
    loadChildren: () => import('./Republican pages/trump/trump.module').then( m => m.TrumpPageModule)
  },
  {
    path: 'weld',
    loadChildren: () => import('./Republican pages/weld/weld.module').then( m => m.WeldPageModule)
  },
  {
    path: 'biden',
    loadChildren: () => import('./Democratic pages/biden/biden.module').then( m => m.BidenPageModule)
  },
  {
    path: 'sanders',
    loadChildren: () => import('./Democratic pages/sanders/sanders.module').then( m => m.SandersPageModule)
  },
  {
    path: 'gabbard',
    loadChildren: () => import('./Democratic pages/gabbard/gabbard.module').then( m => m.GabbardPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./modal/second/second.module').then( m => m.SecondPageModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./modal/third/third.module').then( m => m.ThirdPageModule)
  },
  {
    path: 'fourth',
    loadChildren: () => import('./modal/fourth/fourth.module').then( m => m.FourthPageModule)
  },
  {
    path: 'fifth',
    loadChildren: () => import('./modal/fifth/fifth.module').then( m => m.FifthPageModule)
  },
  {
    path: 'r6',
    loadChildren: () => import('./modal/r6/r6.module').then( m => m.R6PageModule)
  },
  {
    path: 'r7',
    loadChildren: () => import('./modal/r7/r7.module').then( m => m.R7PageModule)
  },
  {
    path: 'r8',
    loadChildren: () => import('./modal/r8/r8.module').then( m => m.R8PageModule)
  },
  {
    path: 'r9',
    loadChildren: () => import('./modal/r9/r9.module').then( m => m.R9PageModule)
  },
  {
    path: 'r10',
    loadChildren: () => import('./modal/r10/r10.module').then( m => m.R10PageModule)
  },
  {
    path: 'r11',
    loadChildren: () => import('./modal/r11/r11.module').then( m => m.R11PageModule)
  },
  {
    path: 'r12',
    loadChildren: () => import('./modal/r12/r12.module').then( m => m.R12PageModule)
  },
  {
    path: 'r13',
    loadChildren: () => import('./modal/r13/r13.module').then( m => m.R13PageModule)
  },
  {
    path: 'r14',
    loadChildren: () => import('./modal/r14/r14.module').then( m => m.R14PageModule)
  },
  {
    path: 'r15',
    loadChildren: () => import('./modal/r15/r15.module').then( m => m.R15PageModule)
  },
  {
    path: 'r16',
    loadChildren: () => import('./modal/r16/r16.module').then( m => m.R16PageModule)
  },
  {
    path: 'r17',
    loadChildren: () => import('./modal/r17/r17.module').then( m => m.R17PageModule)
  },
  {
    path: 'r18',
    loadChildren: () => import('./modal/r18/r18.module').then( m => m.R18PageModule)
  },
  {
    path: 'r19',
    loadChildren: () => import('./modal/r19/r19.module').then( m => m.R19PageModule)
  },
  {
    path: 'r20',
    loadChildren: () => import('./modal/r20/r20.module').then( m => m.R20PageModule)
  },
  {
    path: 'r21',
    loadChildren: () => import('./modal/r21/r21.module').then( m => m.R21PageModule)
  },
  {
    path: 'r22',
    loadChildren: () => import('./modal/r22/r22.module').then( m => m.R22PageModule)
  },
  {
    path: 'r23',
    loadChildren: () => import('./modal/r23/r23.module').then( m => m.R23PageModule)
  },
  {
    path: 'd1',
    loadChildren: () => import('./modal/d1/d1.module').then( m => m.D1PageModule)
  },
  {
    path: 'd2',
    loadChildren: () => import('./modal/d2/d2.module').then( m => m.D2PageModule)
  },
  {
    path: 'd3',
    loadChildren: () => import('./modal/d3/d3.module').then( m => m.D3PageModule)
  },
  {
    path: 'd4',
    loadChildren: () => import('./modal/d4/d4.module').then( m => m.D4PageModule)
  },
  {
    path: 'd5',
    loadChildren: () => import('./modal/d5/d5.module').then( m => m.D5PageModule)
  },
  {
    path: 'd6',
    loadChildren: () => import('./modal/d6/d6.module').then( m => m.D6PageModule)
  },
  {
    path: 'd7',
    loadChildren: () => import('./modal/d7/d7.module').then( m => m.D7PageModule)
  },
  {
    path: 'd8',
    loadChildren: () => import('./modal/d8/d8.module').then( m => m.D8PageModule)
  },
  {
    path: 'd9',
    loadChildren: () => import('./modal/d9/d9.module').then( m => m.D9PageModule)
  },
  {
    path: 'd10',
    loadChildren: () => import('./modal/d10/d10.module').then( m => m.D10PageModule)
  },
  {
    path: 'd11',
    loadChildren: () => import('./modal/d11/d11.module').then( m => m.D11PageModule)
  },
  {
    path: 'd12',
    loadChildren: () => import('./modal/d12/d12.module').then( m => m.D12PageModule)
  },
  {
    path: 'd13',
    loadChildren: () => import('./modal/d13/d13.module').then( m => m.D13PageModule)
  },
  {
    path: 'd14',
    loadChildren: () => import('./modal/d14/d14.module').then( m => m.D14PageModule)
  },
  {
    path: 'd15',
    loadChildren: () => import('./modal/d15/d15.module').then( m => m.D15PageModule)
  },
  {
    path: 'd16',
    loadChildren: () => import('./modal/d16/d16.module').then( m => m.D16PageModule)
  },
  {
    path: 'd17',
    loadChildren: () => import('./modal/d17/d17.module').then( m => m.D17PageModule)
  },
  {
    path: 'd18',
    loadChildren: () => import('./modal/d18/d18.module').then( m => m.D18PageModule)
  },
  {
    path: 'd19',
    loadChildren: () => import('./modal/d19/d19.module').then( m => m.D19PageModule)
  },
  {
    path: 'd20',
    loadChildren: () => import('./modal/d20/d20.module').then( m => m.D20PageModule)
  },
  {
    path: 'd21',
    loadChildren: () => import('./modal/d21/d21.module').then( m => m.D21PageModule)
  },
  {
    path: 'd22',
    loadChildren: () => import('./modal/d22/d22.module').then( m => m.D22PageModule)
  },
  {
    path: 'd23',
    loadChildren: () => import('./modal/d23/d23.module').then( m => m.D23PageModule)
  },
  {
    path: 'd24',
    loadChildren: () => import('./modal/d24/d24.module').then( m => m.D24PageModule)
  },
  {
    path: 'd25',
    loadChildren: () => import('./modal/d25/d25.module').then( m => m.D25PageModule)
  },
  {
    path: 'd26',
    loadChildren: () => import('./modal/d26/d26.module').then( m => m.D26PageModule)
  },
  {
    path: 'd27',
    loadChildren: () => import('./modal/d27/d27.module').then( m => m.D27PageModule)
  },
  {
    path: 'd28',
    loadChildren: () => import('./modal/d28/d28.module').then( m => m.D28PageModule)
  },
  {
    path: 'd29',
    loadChildren: () => import('./modal/d29/d29.module').then( m => m.D29PageModule)
  },
  {
    path: 'd30',
    loadChildren: () => import('./modal/d30/d30.module').then( m => m.D30PageModule)
  },
  {
    path: 'd31',
    loadChildren: () => import('./modal/d31/d31.module').then( m => m.D31PageModule)
  },
  {
    path: 'd32',
    loadChildren: () => import('./modal/d32/d32.module').then( m => m.D32PageModule)
  },
  {
    path: 'd33',
    loadChildren: () => import('./modal/d33/d33.module').then( m => m.D33PageModule)
  },
  {
    path: 'd34',
    loadChildren: () => import('./modal/d34/d34.module').then( m => m.D34PageModule)
  },
  {
    path: 'd35',
    loadChildren: () => import('./modal/d35/d35.module').then( m => m.D35PageModule)
  },
  {
    path: 'd36',
    loadChildren: () => import('./modal/d36/d36.module').then( m => m.D36PageModule)
  },
  {
    path: 'd37',
    loadChildren: () => import('./modal/d37/d37.module').then( m => m.D37PageModule)
  },
  {
    path: 'd38',
    loadChildren: () => import('./modal/d38/d38.module').then( m => m.D38PageModule)
  },
  {
    path: 'd39',
    loadChildren: () => import('./modal/d39/d39.module').then( m => m.D39PageModule)
  },
  {
    path: 'd40',
    loadChildren: () => import('./modal/d40/d40.module').then( m => m.D40PageModule)
  },
  {
    path: 'd41',
    loadChildren: () => import('./modal/d41/d41.module').then( m => m.D41PageModule)
  },
  {
    path: 'd42',
    loadChildren: () => import('./modal/d42/d42.module').then( m => m.D42PageModule)
  },
  {
    path: 'd43',
    loadChildren: () => import('./modal/d43/d43.module').then( m => m.D43PageModule)
  },
  {
    path: 'd44',
    loadChildren: () => import('./modal/d44/d44.module').then( m => m.D44PageModule)
  },
  {
    path: 'd45',
    loadChildren: () => import('./modal/d45/d45.module').then( m => m.D45PageModule)
  },
  {
    path: 'd46',
    loadChildren: () => import('./modal/d46/d46.module').then( m => m.D46PageModule)
  },
  {
    path: 'd47',
    loadChildren: () => import('./modal/d47/d47.module').then( m => m.D47PageModule)
  },
  {
    path: 'd48',
    loadChildren: () => import('./modal/d48/d48.module').then( m => m.D48PageModule)
  },
  {
    path: 'd49',
    loadChildren: () => import('./modal/d49/d49.module').then( m => m.D49PageModule)
  },
  {
    path: 'd50',
    loadChildren: () => import('./modal/d50/d50.module').then( m => m.D50PageModule)
  },
  {
    path: 'd51',
    loadChildren: () => import('./modal/d51/d51.module').then( m => m.D51PageModule)
  },
  {
    path: 'd52',
    loadChildren: () => import('./modal/d52/d52.module').then( m => m.D52PageModule)
  },
  {
    path: 'd53',
    loadChildren: () => import('./modal/d53/d53.module').then( m => m.D53PageModule)
  },
  {
    path: 'd54',
    loadChildren: () => import('./modal/d54/d54.module').then( m => m.D54PageModule)
  },
  {
    path: 'd55',
    loadChildren: () => import('./modal/d55/d55.module').then( m => m.D55PageModule)
  },
  {
    path: 'd56',
    loadChildren: () => import('./modal/d56/d56.module').then( m => m.D56PageModule)
  },
  {
    path: 'd57',
    loadChildren: () => import('./modal/d57/d57.module').then( m => m.D57PageModule)
  },
  {
    path: 'd58',
    loadChildren: () => import('./modal/d58/d58.module').then( m => m.D58PageModule)
  },
  {
    path: 'd59',
    loadChildren: () => import('./modal/d59/d59.module').then( m => m.D59PageModule)
  },
  {
    path: 'd60',
    loadChildren: () => import('./modal/d60/d60.module').then( m => m.D60PageModule)
  },
  {
    path: 'd61',
    loadChildren: () => import('./modal/d61/d61.module').then( m => m.D61PageModule)
  },
  {
    path: 'd62',
    loadChildren: () => import('./modal/d62/d62.module').then( m => m.D62PageModule)
  },
  {
    path: 'd63',
    loadChildren: () => import('./modal/d63/d63.module').then( m => m.D63PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules },)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
