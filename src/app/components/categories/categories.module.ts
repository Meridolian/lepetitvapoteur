import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';



@NgModule({
  imports: [
    NativeScriptCommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CategoriesModule { }
