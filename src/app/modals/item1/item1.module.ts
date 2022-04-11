import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Item1PageRoutingModule } from './item1-routing.module';

import { Item1Page } from './item1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Item1PageRoutingModule
  ],
  declarations: [Item1Page]
})
export class Item1PageModule {}
