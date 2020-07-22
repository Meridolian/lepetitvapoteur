import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";
import { SearchRoutingModule } from "./search-routing.module";

import { SearchComponent } from "./search.component";
import { SingleItemModule } from "../item/single-item/single-item.module";
import { ListItemModule } from "../item/list-item/list-item.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule,
        ListItemModule,
        SingleItemModule
    ],
    declarations: [
        SearchComponent,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
