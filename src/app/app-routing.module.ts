import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthComponent } from "./components/auth/auth.component";

const routes: Routes = [
    { path: "", redirectTo: "app", pathMatch: "full" },
    { path: "app", loadChildren: () => import("~/app/components/navbar/navbar.module").then((m) => m.NavbarModule) },
    { path: "auth", loadChildren: () => import("~/app/components/auth/auth.module").then((m) => m.AuthModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
