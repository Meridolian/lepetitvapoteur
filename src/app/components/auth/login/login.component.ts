import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { UserService } from '~/app/services/user.service';

@Component({
	selector: 'ns-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	@Input() startingApp: boolean;

	email: string;
	password: string;

	invalidEmail: boolean;
	invalidPassword: boolean;

	errorMessage: boolean;

	spinner: boolean;

	welcome: boolean;

	@Output() goToSignup = new EventEmitter();
	@Output() goToApp = new EventEmitter();

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.errorMessage = false;

		this.welcome = false;

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
		if (this.validatorFields()) {
			this.spinner = true;
			if (this.userService.logIn(this.email, this.password)) {
				this.errorMessage = false;
				setTimeout(() => {
					this.spinner = false;
					this.welcome = true;
				}, 2000);
				setTimeout(() => {
					this.welcome = false;
					this.onGoToApp(false);
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
		if (!regexEmail.test(this.email)) {
			this.invalidEmail = true;
			validator = false;
		}
		else {
			this.invalidEmail = false;
		}

		//check password field
		if (this.password.length < 1) {
			this.invalidPassword = true;
			validator = false;
		}
		else {
			this.invalidPassword = false;
		}

		return validator;
	}

	onGoToSignup() {
		this.goToSignup.emit(null);
	}

	onGoToApp(showAuth: boolean) {
		this.userService.setShowLoginSignup(showAuth);
		this.goToApp.emit(null);
	}


	onRotateActionBar(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}
}
