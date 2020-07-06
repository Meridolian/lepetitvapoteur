import { Component, OnInit } from '@angular/core';
import { User } from '~/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import { Image } from "tns-core-modules/ui/image";
import { UserService } from '~/app/services/user.service';

@Component({
	selector: 'ns-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	startingApp: boolean;

	email: string;
	password: string;

	errorMessage: boolean;

	constructor(private route: ActivatedRoute, private router: RouterExtensions, private userService: UserService) { }

	ngOnInit(): void {
		this.errorMessage = false;

		this.startingApp = JSON.parse(this.route.snapshot.paramMap.get("startingApp"));

		this.initFields();
	}

	initFields() {
		this.email = "";
		this.password = "";
	}

	onRotate(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}

	onLogin() {
		//TODO validators for all fields
		if(this.userService.logIn(this.email, this.password)){
			this.errorMessage = false;

			this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
		}
		else {
			this.errorMessage = true;
		}
	}

	goToSignup() {
		this.router.navigate(['/signup', { startingApp: this.startingApp }], { animated: true, transition: { name: 'slide', duration: 250 } });
	}

	goToApp() {
		this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
	}
}
