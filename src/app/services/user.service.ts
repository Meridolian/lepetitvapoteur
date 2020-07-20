import { Injectable, OnInit } from "@angular/core";
import { User } from "../models/user.model";
import { getString, setString, remove } from "tns-core-modules/application-settings";
import { Subject } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class UserService {

    logged: boolean;
    loggedSubject: Subject<boolean>;

    showLoginSignup: boolean;

    user: User;
    userSubject: Subject<User>;

    users: Array<User>;

    constructor() {
        this.userSubject = new Subject<User>();
        this.loggedSubject = new Subject<boolean>();
        if (getString("user") !== undefined) {
            this.user = JSON.parse(getString("user"));
            this.logged = true;
            setTimeout(() => {
                this.emitUser();
                this.emitLogged();
            },1);
        }
        else {
            this.logged = false;
            this.emitLogged();
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

    emitLogged() {
        this.loggedSubject.next(this.logged);
    }

    createUser(user: User) {
        if (this.users === undefined) {
            this.users = new Array();
        }
        this.users.push(user);
        this.user = user;
        this.emitUser();
        this.logged = true;
        this.emitLogged();
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
                    this.emitLogged();
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
        this.emitLogged();
        this.showLoginSignup = true;
        remove("user");
        setString("showLoginSignup", JSON.stringify(this.showLoginSignup));
    }

    setShowLoginSignup(showLoginSignup: boolean) {
        this.showLoginSignup = showLoginSignup;
        setString("showLoginSignup", JSON.stringify(this.showLoginSignup));
    }
}