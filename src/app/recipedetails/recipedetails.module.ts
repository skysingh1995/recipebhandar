import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipedetailsRoutingModule } from './recipedetails-routing.module';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';

@NgModule({
  declarations: [RecipedetailComponent],
  imports: [
    CommonModule,
    RecipedetailsRoutingModule
  ]
})
export class RecipedetailsModule { }
