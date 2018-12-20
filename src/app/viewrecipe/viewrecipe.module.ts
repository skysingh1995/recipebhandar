import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewrecipeRoutingModule } from './viewrecipe-routing.module';
import { ViewrecipelistComponent } from './viewrecipelist/viewrecipelist.component';

@NgModule({
  declarations: [ViewrecipelistComponent],
  imports: [
    CommonModule,
    ViewrecipeRoutingModule
  ]
})
export class ViewrecipeModule { }
