import { Component, OnInit, Input } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { isIOS, Page } from "tns-core-modules/ui/page/page";
import * as utils from "tns-core-modules/utils/utils";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    
    back: boolean = false;
    search: string;
    showSearch: boolean;

    text: string = "lol";

    constructor() { }

    ngOnInit(): void {
        this.showSearch = false;
    }

    goBack(): void {
    }

    onSettings(): void {
        alert("coucou")
    }


    onSearch(args): void {
        this.hideKeyboard(args);
        
        this.showSearch = true;
    }

    hideKeyboard(args){
        let page: Page = args.object.page;
        let searchField: TextField = page.getViewById('searchField');
        if (isIOS) {
            searchField.nativeView.endEditing(true);
        } else {
            searchField.nativeView.clearFocus();
            utils.ad.dismissSoftInput();
        }
    }

}
