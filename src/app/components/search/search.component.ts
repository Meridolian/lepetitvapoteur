import { Component, OnInit } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    onBlur(args){
        let textField = <TextField>args.object;
        textField.dismissSoftInput();
    }

    onSearch(): void {
        
    }

}
