import { Component, OnInit } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { RouterExtensions } from 'nativescript-angular';
import { User } from '~/app/models/user.model';
import { ModalDatetimepicker } from 'nativescript-modal-datetimepicker';
import { ActivatedRoute } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { UserService } from '~/app/services/user.service';

@Component({
	selector: 'ns-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

	startingApp: boolean;

	user: User;
	email: string;
	password: string;
	confirmPassword: string;
	civility: string;
	firstName: string;
	lastName: string;
	birthday: Date;
	newsletter: boolean;

	birthdayShort: string;

	constructor(private router: RouterExtensions, private route: ActivatedRoute, private userService: UserService) { }

	ngOnInit(): void {
		this.startingApp = JSON.parse(this.route.snapshot.paramMap.get("startingApp"));

		this.initFields();

		this.shortDate(this.birthday);
	}

	initFields() {
		this.email = "";
		this.password = "";
		this.confirmPassword = "";
		this.civility = "";
		this.firstName = "";
		this.lastName = "";
		this.birthday = new Date;
		this.newsletter = false;
	}

	onRotate(args) {
		let image = <Image>args.object;
		image.animate({
			rotate: 360,
			duration: 750
		}).then(() => image.rotate = 0);
	}

	onCivility(choice) {
		this.civility = choice;
	}

	onBirthday() {
		let picker = new ModalDatetimepicker();
		picker.pickDate({
			maxDate: new Date(),
			minDate: new Date(1900, 1, 1)
		}).then((result) => {
			let date = new Date(result.year, result.month - 1, result.day);
			this.birthday = date;
		}).then(() => {
			this.shortDate(this.birthday);
		});
	}

	onSignup() {
		//TODO validators for all fields
		this.user = new User(this.civility, this.firstName, this.lastName, this.email, this.password, this.birthday, 
			null, null, null, null, null, null);

		this.userService.createUser(this.user);

		this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
	}

	/* validatorFields(): boolean{
		let validator: boolean = false;
		
		let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

	} */

	goToLogin() {
		this.router.navigate(['/login', { startingApp: this.startingApp }], { animated: true, transition: { name: 'slideRight', duration: 250 } });
	}

	goToApp() {
		this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });
	}

	shortDate(date: Date) {
		let months = ["JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE"];
		let day = date.getDate();
		let month = months[date.getMonth()];
		let year = date.getFullYear();
		this.birthdayShort = day + " " + month + " " + year;
	}

}
