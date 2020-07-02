import { Component, OnInit, Input } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { isIOS, Page } from "tns-core-modules/ui/page/page";
import * as utils from "tns-core-modules/utils/utils";
import { ItemService } from "~/app/services/item.service";
import { Item } from "~/app/models/item.model";
import { RouterExtensions } from "nativescript-angular";
import { Image } from "tns-core-modules/ui/image";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {

    back: boolean;
    searchField: string;
    showSearch: boolean;
    arrayItem: Array<Item>;
    showError: boolean;
    errorMessage: string;
    showSingleItem: boolean;
    singleItem: Item;

    constructor(private itemService: ItemService, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.back = false;
        this.showSearch = false;
        this.showError = false;
        this.errorMessage = "";
        this.showSingleItem = false;
    }

    goBack(): void {
        delete this.singleItem;
        this.showSingleItem = false;
        this.back = false;
    }

    onSettings(): void {
        alert("Settings")
    }


    onSearch(args): void {
        this.arrayItem = [];
        if (this.searchField !== undefined && this.searchField !== "" && this.searchField !== null) {
            this.arrayItem = this.itemService.getItemByName(this.searchField);
            if (this.arrayItem.length < 1) {
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

    hideKeyboard(args) {
        let page: Page = args.object.page;
        let searchField: TextField = page.getViewById('searchField');
        if (isIOS) {
            searchField.nativeView.endEditing(true);
        } else {
            searchField.nativeView.clearFocus();
            utils.ad.dismissSoftInput();
        }
    }

    onSingleItem(id: number) {
        this.singleItem = this.itemService.getItem(id);
        this.showSingleItem = true;
        this.back = true;
    }

    onRotate(args) {
        let image = <Image>args.object;
        image.animate({
            rotate: 360,
            duration: 750
        }).then(() => image.rotate = 0);
    }
}
