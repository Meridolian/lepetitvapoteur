import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { getString, setString, remove } from "tns-core-modules/application-settings";
import { Subject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class UserService {

    logged: boolean;
    showLoginSignup: boolean;

    user: User;
    userSubject: Subject<User>;

    users: Array<User>;

    constructor() {
        this.userSubject = new Subject<User>();
        if (getString("user") !== undefined) {
            this.user = JSON.parse(getString("user"));
            this.emitUser();
            this.logged = true;
        }
        else {
            this.logged = false;
        }

        if (getString("users") !== undefined) {
            this.users = JSON.parse(getString("users"));
        }

        if (getString("showLoginSignup") !== undefined) {
            this.showLoginSignup = JSON.parse(getString("showLoginSignup"));
        }
        else {
            this.showLoginSignup = true;
        }
    }

    emitUser() {
        this.userSubject.next(this.user);
    }

    createUser(user: User) {
        if (this.users === undefined) {
            this.users = new Array();
        }
        this.users.push(user);
        this.user = user;
        this.emitUser();
        this.logged = true;
        setString("users", JSON.stringify(this.users));
        this.showLoginSignup = false;
        setString("showLoginSignup", JSON.stringify(this.showLoginSignup));
    }

    logIn(email: string, password: string): boolean {
        if (this.users !== undefined) {
            for (let i = 0; i < this.users.length; i++) {
                let currentUser = this.users[i];
                if (email === currentUser.email && password === currentUser.password) {
                    this.user = currentUser;
                    this.emitUser();
                    this.logged = true;
                    setString("user", JSON.stringify(currentUser));
                    break;
                }
            }
        }

        if (this.logged) {
            this.showLoginSignup = false;
            setString("showLoginSignup", JSON.stringify(this.showLoginSignup));
            return true;
        }
        else {
            return false;
        }
    }

    updateUser(user: User) {
        this.user = user;
        this.emitUser();
        for (let i = 0; i < this.users.length; i++) {
            let currentUser = this.users[i];
            if (user === currentUser) {
                this.users[i] = user;
                break;
            }
        }
        setString("users", JSON.stringify(this.users));
        setString("user", JSON.stringify(this.user));
    }

    logOut() {
        delete this.user;
        this.emitUser();
        this.logged = false;
        remove("user");
    }

    setShowLoginSignup(showLoginSignup: boolean) {
        this.showLoginSignup = showLoginSignup;
        setString("showLoginSignup", JSON.stringify(this.showLoginSignup));
    }
}