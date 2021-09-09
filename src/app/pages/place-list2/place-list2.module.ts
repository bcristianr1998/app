import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaceList2PageRoutingModule } from './place-list2-routing.module';

import { PlaceList2Page } from './place-list2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaceList2PageRoutingModule
  ],
  declarations: [PlaceList2Page]
})
export class PlaceList2PageModule {}
