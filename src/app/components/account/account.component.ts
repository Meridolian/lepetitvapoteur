import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { UserService } from '~/app/services/user.service';
import { Subscription } from 'rxjs';
import { User } from '~/app/models/user.model';
import { ProfileComponent } from './profile/profile.component';

@Component({
	selector: 'ns-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

	back: boolean;
	backContext: string;

	userSubscription: Subscription;
	user: User;

	loggedSubscription: Subscription;
	logged: boolean;

	userString: string;
	welcome: string;

	@ViewChild(ProfileComponent, null) profile: ProfileComponent;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.loggedSubscription = this.userService.loggedSubject.subscribe(
			(logged: boolean) => {
				this.logged = logged;
			}
		);
		this.userSubscription = this.userService.userSubject.subscribe(
			(user: User) => {
				this.user = user;
				this.welcome = "BONJOUR " + user.firstName;
				this.profile.initFields();
			}
		);

		this.back = false;
	}

	goBack(): void {
		switch(this.backContext) {
			case "formAddress": 
				this.profile.goBack();
			break;

		}

		this.back = false;
	}

	onBackHandler(context: string) {
		this.backContext = context;
		this.back = true;
	}


	onRotate(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}

	ngOnDestroy(): void {
		this.loggedSubscription.unsubscribe();
		this.userSubscription.unsubscribe();
	}
}
