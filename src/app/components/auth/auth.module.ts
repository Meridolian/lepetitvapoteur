import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LoginComponent } from "./login/login.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { SignupComponent } from "./signup/signup.component";
import { ReusableModule } from "../reusable/reusable.module";
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from "./auth-routing.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		AuthRoutingModule,
		ReusableModule
	],
	declarations: [
		LoginComponent,
		SignupComponent,
		AuthComponent
	],
	providers: [
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AuthModule { }