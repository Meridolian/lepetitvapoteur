import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";

import { ListItemComponent } from "./list-item.component";
import { ReusableModule } from "../../reusable/reusable.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        ReusableModule
    ],
    declarations: [
        ListItemComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        ListItemComponent
    ]
})
export class ListItemModule { }