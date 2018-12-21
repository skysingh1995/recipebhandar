import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },

  {
    path: 'offline',
    loadChildren: './offline/offline.module#OfflineModule'
  },
  {
    path: 'add',
    loadChildren: './addrecipe/addrecipe.module#AddrecipeModule'
  },
  {
    path: 'view',
    loadChildren: './viewrecipe/viewrecipe.module#ViewrecipeModule'
  },
  {
    path: 'view/:id',
    loadChildren: './recipedetails/recipedetails.module#RecipedetailsModule'
  },
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
