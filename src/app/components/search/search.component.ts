import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { Page, isIOS } from "tns-core-modules/ui/page/page";
import * as utils from "tns-core-modules/utils/utils";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    
    back: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    goBack(): void {
    }

    onSettings(): void {
        alert("coucou")
    }

    onFocus(args) {
    }

    onBlur(args){
        let textField = <TextField>args.object;
        textField.dismissSoftInput();
    }

    onSearch(args): void {

        // This code force lose focus on the text field and hide keyboard
        let button = args.object;
        let page: Page = button.page;
        if (isIOS) {
            page.nativeView.endEditing(true);
        } else {
            let field: TextField = page.getViewById("searchField");
            field.nativeView.clearFocus();
            utils.ad.dismissSoftInput();
        }

        // code to search an item

    }

}
