import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Item1Page } from './item1.page';

const routes: Routes = [
  {
    path: '',
    component: Item1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Item1PageRoutingModule {}
