import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./modules/auth/login/login.component";
import { SignupComponent } from "./modules/auth/signup/signup.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "app",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "app",
        loadChildren: () => import("~/app/modules/navbar/navbar.module").then((m) => m.NavbarModule)
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
