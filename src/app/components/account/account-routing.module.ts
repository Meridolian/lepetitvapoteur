import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AccountComponent } from "./account.component";
import { LoginComponent } from "../auth/login/login.component";
import { SignupComponent } from "../auth/signup/signup.component";

const routes: Routes = [
    { path: "", redirectTo: "account", pathMatch: "full" },
    { path: "account", component: AccountComponent, children: [
        { path: "login", component: LoginComponent },
        { path: "signup", component: SignupComponent }
    ] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AccountRoutingModule { }
