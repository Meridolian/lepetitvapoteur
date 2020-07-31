import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { UserService } from '~/app/services/user.service';
import { Subscription } from 'rxjs';
import { User } from '~/app/models/user.model';
import { RouterExtensions } from 'nativescript-angular';

@Component({
	selector: 'ns-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

	back: boolean = false;
	userSubscription: Subscription;
	loggedSubscription: Subscription;
	user: User;
	logged: boolean;
	userString: string;
	welcome: string;

	constructor(private userService: UserService, private router: RouterExtensions) { }

	ngOnInit(): void {
		this.userSubscription = this.userService.userSubject.subscribe(
			(user: User) => {
				this.user = user;
				this.welcome = "BONJOUR " + user.firstName;
			}
		);
		this.loggedSubscription = this.userService.loggedSubject.subscribe(
			(logged: boolean) => {
				this.logged = logged;
				if(this.logged === false){
					this.router.navigate(['login', { startingApp: false}]);
				}
			}
		);
	}

	goBack(): void {
	}

	onSettings(): void {
		alert("coucou")
	}

	onRotate(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}

	ngOnDestroy(): void {
		this.userSubscription.unsubscribe();
		this.loggedSubscription.unsubscribe();
	}
}
