import { RouterModule, Routes } from '@angular/router';

import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '', 
  component: FavoritesPageComponent 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
