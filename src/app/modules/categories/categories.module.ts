import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryUtil } from '~/app/utils/category.util';
import { ListItemModule } from '../item/list-item/list-item.module';
import { SingleItemModule } from '../item/single-item/single-item.module';
import { NativeScriptFormsModule } from 'nativescript-angular';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CategoriesRoutingModule,
    NativeScriptFormsModule,
    ListItemModule,
    SingleItemModule
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
