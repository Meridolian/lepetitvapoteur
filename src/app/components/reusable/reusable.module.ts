import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";
import { TitleHeadComponent } from "./title-head/title-head.component";
import { CustomSpinnerComponent } from "./custom-spinner/custom-spinner.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule     
    ],
    declarations: [
        TitleHeadComponent,
        CustomSpinnerComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        TitleHeadComponent,
        CustomSpinnerComponent
    ]
})
export class ReusableModule { }