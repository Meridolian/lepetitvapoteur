import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NavbarComponent } from "./navbar.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "app",
        pathMatch: "full"
    },
    {
        path: "app",
        component: NavbarComponent,
        children: [
            {
                path: "home",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/modules/home/home.module").then((m) => m.HomeModule),
                outlet: "home"
            },
            {
                path: "search",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/modules/search/search.module").then((m) => m.SearchModule),
                outlet: "search"
            },
            {
                path: "categories",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/modules/categories/categories.module").then((m) => m.CategoriesModule),
                outlet: "categories"
            },
            {
                path: "account",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/modules/account/account.module").then((m) => m.AccountModule),
                outlet: "account"
            },
            {
                path: "shoppingCart",
                component: NSEmptyOutletComponent,
                loadChildren: () => import("~/app/modules/shopping-cart/shopping-cart.module").then((m) => m.ShoppingCartModule),
                outlet: "shoppingCart"
            }
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class NavbarRoutingModule { }