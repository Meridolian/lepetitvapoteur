import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LoginComponent } from "./login/login.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { SignupComponent } from "./signup/signup.component";
import { CustomSpinnerModule } from "../custom-spinner/custom-spinner.module";
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		CustomSpinnerModule
	],
	declarations: [
		LoginComponent,
		SignupComponent,
		WelcomeComponent
	],
	providers: [
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	exports: [
		LoginComponent,
		SignupComponent,
		WelcomeComponent
	]
})
export class AuthModule { }