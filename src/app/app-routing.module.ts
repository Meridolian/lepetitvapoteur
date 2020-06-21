import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NSEmptyOutletComponent } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/(home:home/default//search:search/default//categories:categories/default//account:account/default//shopping-cart:shopping-cart/default)",
        pathMatch: "full"
    },

    {
        path: "home",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/home/home.module").then((m) => m.HomeModule),
        outlet: "home"
    },
    {
        path: "search",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/search/search.module").then((m) => m.SearchModule),
        outlet: "search"
    },
    {
        path: "categories",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/categories/categories.module").then((m) => m.CategoriesModule),
        outlet: "categories"
    },
    {
        path: "account",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/account/account.module").then((m) => m.AccountModule),
        outlet: "account"
    },
    {
        path: "shopping-cart",
        component: NSEmptyOutletComponent,
        loadChildren: () => import("~/app/components/shopping-cart/shopping-cart.module").then((m) => m.ShoppingCartModule),
        outlet: "shopping-cart"
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
