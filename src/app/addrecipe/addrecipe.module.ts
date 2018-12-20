import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddrecipeRoutingModule } from './addrecipe-routing.module';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    AddrecipeRoutingModule
  ]
})
export class AddrecipeModule { }
