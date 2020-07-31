import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";
import { AddressComponent } from "./address.component";
import { ReusableModule } from "../reusable/reusable.module";
import { FormAddressComponent } from './form-address/form-address.component';

@NgModule({
	imports: [
		NativeScriptCommonModule,
		NativeScriptFormsModule,
		ReusableModule
	],
	declarations: [
		AddressComponent,
		FormAddressComponent
	],
	providers: [
	],
	schemas: [
		NO_ERRORS_SCHEMA
	],
	exports: [
		AddressComponent,
		FormAddressComponent
	]
})
export class AddressModule { }