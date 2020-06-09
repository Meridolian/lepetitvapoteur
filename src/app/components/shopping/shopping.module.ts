import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';



@NgModule({
  imports: [
    NativeScriptCommonModule,
    ShoppingRoutingModule
  ],
  declarations: [
    ShoppingComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ShoppingModule { }
