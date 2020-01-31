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
    path: 'walsh',
    loadChildren: () => import('./Republican pages/walsh/walsh.module').then( m => m.WalshPageModule)
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
    path: 'warren',
    loadChildren: () => import('./Democratic pages/warren/warren.module').then( m => m.WarrenPageModule)
  },
  {
    path: 'pete',
    loadChildren: () => import('./Democratic pages/pete/pete.module').then( m => m.PetePageModule)
  },
  {
    path: 'yang',
    loadChildren: () => import('./Democratic pages/yang/yang.module').then( m => m.YangPageModule)
  },
  {
    path: 'amy',
    loadChildren: () => import('./Democratic pages/amy/amy.module').then( m => m.AmyPageModule)
  },
  {
    path: 'booker',
    loadChildren: () => import('./Democratic pages/booker/booker.module').then( m => m.BookerPageModule)
  },
  {
    path: 'gabbard',
    loadChildren: () => import('./Democratic pages/gabbard/gabbard.module').then( m => m.GabbardPageModule)
  },
  {
    path: 'bennet',
    loadChildren: () => import('./Democratic pages/bennet/bennet.module').then( m => m.BennetPageModule)
  },
  {
    path: 'patrick',
    loadChildren: () => import('./Democratic pages/patrick/patrick.module').then( m => m.PatrickPageModule)
  },
  {
    path: 'mari',
    loadChildren: () => import('./Democratic pages/mari/mari.module').then( m => m.MariPageModule)
  },
  {
    path: 'john',
    loadChildren: () => import('./Democratic pages/john/john.module').then( m => m.JohnPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
