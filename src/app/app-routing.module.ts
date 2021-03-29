import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'escolha-car',
    loadChildren: () => import('./escolha-car/escolha-car.module').then( m => m.EscolhaCarPageModule)
  },
  {
    path: 'passagem-aerea',
    loadChildren: () => import('./passagem-aerea/passagem-aerea.module').then( m => m.PassagemAereaPageModule)
  },
  {
    path: 'mapdone',
    loadChildren: () => import('./mapdone/mapdone.module').then( m => m.MapdonePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
