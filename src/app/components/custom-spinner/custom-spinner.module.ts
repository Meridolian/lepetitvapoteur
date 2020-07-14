import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CustomSpinnerComponent } from "./custom-spinner.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,        
    ],
    declarations: [
        CustomSpinnerComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        CustomSpinnerComponent
    ]
})
export class CustomSpinnerModule { }