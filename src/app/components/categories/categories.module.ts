import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryUtil } from '~/app/utils/category.util';



@NgModule({
  imports: [
    NativeScriptCommonModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent
  ],
  providers: [
    CategoryUtil
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CategoriesModule { }
