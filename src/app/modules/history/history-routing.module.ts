import { RouterModule, Routes } from '@angular/router';

import { HistoryPageComponent } from './history-page/history-page.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '', 
  component: HistoryPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
