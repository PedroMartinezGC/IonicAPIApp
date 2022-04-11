import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ItemlistPageRoutingModule } from './itemlist-routing.module';

import { ItemlistPage } from './itemlist.page';

//Modals
import { Item1Page } from 'src/app/modals/item1/item1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemlistPageRoutingModule
  ],
  declarations: [ItemlistPage, Item1Page],
  entryComponents: [Item1Page]
})
export class ItemlistPageModule {}
