import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { LoginComponent } from "./login/login.component";
import { NativeScriptFormsModule } from "nativescript-angular";
import { SignupComponent } from "./signup/signup.component";
import { CustomSpinnerModule } from "../../components/custom-spinner/custom-spinner.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		CustomSpinnerModule
	],
	declarations: [
		LoginComponent,
		SignupComponent
	],
	providers: [
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	exports: [
		LoginComponent,
		SignupComponent
	]
})
export class AuthModule { }