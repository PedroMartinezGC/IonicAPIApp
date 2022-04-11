import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemlistPage } from './itemlist.page';

const routes: Routes = [
  {
    path: '',
    component: ItemlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemlistPageRoutingModule {}
