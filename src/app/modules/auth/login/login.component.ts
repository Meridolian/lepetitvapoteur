import { Component, OnInit } from '@angular/core';
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

	invalidEmail: boolean;
	invalidPassword: boolean;

	errorMessage: boolean;

	spinner: boolean;

	welcome: boolean;

	constructor(private route: ActivatedRoute, private router: RouterExtensions, private userService: UserService) { }

	ngOnInit(): void {
		this.errorMessage = false;

		this.welcome = false;

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
		if(this.validatorFields()){
			this.spinner = true;
			if (this.userService.logIn(this.email, this.password)) {
				this.errorMessage = false;
				setTimeout(() => {
					this.spinner = false;
					this.welcome = true;
				}, 2000);
				setTimeout(() => {
					this.welcome = false;
					this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
				}, 8000);
			}
			else {
				setTimeout(() => {
					this.spinner = false;
					this.errorMessage = true;
				}, 1000);
			}
		}
	}

	validatorFields(): boolean {
		let validator: boolean = true;

		//check email field
		let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if(!regexEmail.test(this.email)){
			this.invalidEmail = true;
			validator = false;
		}
		else {
			this.invalidEmail = false;
		}

		//check password field
		if(this.password.length < 1){
			this.invalidPassword = true;
			validator = false;
		}
		else {
			this.invalidPassword = false;
		}

		return validator;
	}

	goToSignup() {
		this.router.navigate(['/signup', { startingApp: this.startingApp }], { animated: true, transition: { name: 'slide', duration: 250 } });
	}

	goToApp() {
		this.userService.setShowLoginSignup(false);
		this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
	}
}
