import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { CategoriesComponent } from "./categories.component";

const routes: Routes = [
    { path: "", redirectTo: "categories", pathMatch: "full" },
    { path: "categories", component: CategoriesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CategoriesRoutingModule { }
