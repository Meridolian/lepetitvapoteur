import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular";
import { UserService } from "./services/user.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private userService: UserService, private router: RouterExtensions) { }

    ngOnInit(): void {
        if (this.userService.showLoginSignup) {
            this.router.navigate(['/auth', { startingApp: true }]);
        }
    }
}
