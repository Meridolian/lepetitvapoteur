import { Component, OnInit, Input } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { isIOS, Page } from "tns-core-modules/ui/page/page";
import * as utils from "tns-core-modules/utils/utils";
import { ItemService } from "~/app/shared/item.service";
import { Item } from "~/app/models/item.model";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    
    back: boolean = false;
    searchField: string;
    showSearch: boolean;
    arrayItem: Array<Item>;
    showError: boolean;
    errorMessage: string;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.showSearch = false;
        this.showError = false;
        this.errorMessage = "";
    }

    goBack(): void {
    }

    onSettings(): void {
        alert("Settings")
    }


    onSearch(args): void {
        this.arrayItem = [];
        if(this.searchField !== undefined && this.searchField !== "" && this.searchField !== null){
            this.arrayItem = this.itemService.getItemByName(this.searchField);
            if(this.arrayItem.length < 1){
                this.showError = true;
                this.errorMessage = "Aucun article trouvé.";
            }
            else {
                this.hideKeyboard(args);
                this.showError = false;
                this.errorMessage = "";
                this.showSearch = true;
            }
            
        }
        else {
            this.showSearch = false;
            this.showError = true;
            this.errorMessage = "Veuillez rentrer un nom d'article à chercher !";
        }
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
