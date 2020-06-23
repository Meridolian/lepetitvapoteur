import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";

import { SingleItemComponent } from "./single-item.component";

import { registerElement } from 'nativescript-angular/element-registry';
registerElement('Gif', () => require('nativescript-gif').Gif);

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SingleItemComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        SingleItemComponent
    ]
})
export class SingleItemModule { }