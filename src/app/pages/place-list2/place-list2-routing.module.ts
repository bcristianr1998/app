import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaceList2Page } from './place-list2.page';

const routes: Routes = [
  {
    path: '',
    component: PlaceList2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceList2PageRoutingModule {}
