import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { ReusableModule } from '../reusable/reusable.module';



@NgModule({
  imports: [
    NativeScriptCommonModule,
    ShoppingCartRoutingModule,
    NativeScriptFormsModule,
    ReusableModule
  ],
  declarations: [
    ShoppingCartComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ShoppingCartModule { }
