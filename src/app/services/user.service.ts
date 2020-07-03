import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { Subject } from "rxjs";
import { Observable } from "tns-core-modules/ui/page";


@Injectable({
    providedIn: "root"
})
export class UserService implements OnInit {

    logged: boolean;

    user: User;

    ngOnInit(): void {
        this.logged = false;
    }


    logIn(){

    }

    createUser(){
        
    }

    logOut(){
        
    }
}