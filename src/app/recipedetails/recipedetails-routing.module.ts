import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipedetailComponent} from './recipedetail/recipedetail.component';

const routes: Routes = [
  {
    path: '',
    component: RecipedetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipedetailsRoutingModule { }
