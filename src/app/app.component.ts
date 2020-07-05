import { Component, OnInit, OnDestroy } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { UserService } from "./services/user.service";
import { NavigationExtras } from "@angular/router";
import { User } from "./models/user.model";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService, private router: RouterExtensions) {}

    ngOnInit(): void {
        if(this.userService.logged){
            this.router.navigate(['/app']);
        }
        else {
            this.router.navigate(['/auth', { startingApp: true }]);
        }
    }
}
