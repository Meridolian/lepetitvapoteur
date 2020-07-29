import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";
import { AddressComponent } from "./address.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		ReusableModule
	],
	declarations: [
		AddressComponent
	],
	providers: [
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	exports: [
		AddressComponent
	]
})
export class AddressModule { }