import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ShoppingCartComponent } from "./shopping-cart.component";

const routes: Routes = [
    { path: "default", component: ShoppingCartComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ShoppingCartRoutingModule { }