import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ComponentsModule } from '~/app/components/components.module';
import { NativeScriptFormsModule } from 'nativescript-angular';



@NgModule({
  imports: [
    NativeScriptCommonModule,
    ShoppingCartRoutingModule,
    NativeScriptFormsModule,
    ComponentsModule
  ],
  declarations: [
    ShoppingCartComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ShoppingCartModule { }
