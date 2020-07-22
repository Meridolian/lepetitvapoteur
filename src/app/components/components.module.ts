import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { TitleHeadComponent } from "./title-head/title-head.component";
import { CustomSpinnerComponent } from "./custom-spinner/custom-spinner.component";
import { NativeScriptFormsModule } from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule     
    ],
    declarations: [
        CustomSpinnerComponent,
        TitleHeadComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        CustomSpinnerComponent,
        TitleHeadComponent
    ]
})
export class ComponentsModule { }