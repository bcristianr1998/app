import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'places/add',
    loadChildren: () => import('./pages/place-save/place-save.module').then(m => m.PlaceSavePageModule)
  },
  {
    path: 'places/:id/:slug/reviews',
    loadChildren: () => import('./pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
  },
  {
    path: 'places/:id/reviews',
    loadChildren: () => import('./pages/review-list/review-list.module').then(m => m.ReviewListPageModule)
  },
  {
    path: 'places/:id',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
  },
  {
    path: 'places/:id/:slug',
    loadChildren: () => import('./pages/place-detail/place-detail.module').then(m => m.PlaceDetailPageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/place-list2/place-list2.module').then( m => m.PlaceList2PageModule)
  },
  {
    path: 'stores2',
    loadChildren: () => import('./pages/place-list3/place-list.module').then( m => m.PlaceListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
