import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewrecipelistComponent } from './viewrecipelist/viewrecipelist.component';


const routes: Routes = [
  {
    path: '',
    component: ViewrecipelistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewrecipeRoutingModule { }
