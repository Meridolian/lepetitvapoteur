import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular";
import { SearchRoutingModule } from "./search-routing.module";

import { SearchComponent } from "./search.component";
import { ListItemComponent } from "../item/list-item/list-item.component";
import { SingleItemComponent } from "../item/single-item/single-item.component";

import { ItemService } from "~/app/shared/item.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SearchComponent,
        ListItemComponent,
        SingleItemComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
