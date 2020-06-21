import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    item = {
        colors: ["Black", "Blue", "Gold"]
    }

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    /* onInitCategories(){
        console.log("coucou")
    } */
}
