import { Component, OnInit } from '@angular/core';
import { Image } from "tns-core-modules/ui/image";
import { RouterExtensions } from 'nativescript-angular';
import { User } from '~/app/models/user.model';
import { ModalDatetimepicker } from 'nativescript-modal-datetimepicker';
import { ActivatedRoute } from '@angular/router';
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
	birthday: Date;
	lastName: string;
	firstName: string;
	newsletter: boolean;

	birthdayShort: string;

	invalidEmail: boolean;
	invalidPassword: boolean;
	invalidConfirmPassword: boolean;
	invalidCivility: boolean;
	invalidBirthday: boolean;
	invalidLastName: boolean;
	invalidFirstName: boolean;

	spinner: boolean;

	welcome: boolean;

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
		if(this.validatorFields()){
			this.spinner = true;
			setTimeout(() => {
				this.spinner = false;
				this.welcome = true;
			}, 3000);
			setTimeout(() => {
				this.user = new User(this.civility, this.firstName, this.lastName, this.email, this.password, this.birthday, 
					[], null, null, null, null, null);
		
				this.userService.createUser(this.user);
		
				this.router.navigate(['/app'], { animated: true, transition: { name: 'slide', duration: 250 } });

				this.welcome = false;
			}, 8000);
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

		//check confirmPassword field
		if(this.confirmPassword !== this.password){
			this.invalidConfirmPassword = true;
			validator = false;
		}
		else {
			this.invalidConfirmPassword = false;
		}

		//check civility field
		if(this.civility.length < 1){
			this.invalidCivility = true;
			validator = false;
		}
		else {
			this.invalidCivility = false;
		}
	
		//check birthday field
		let age = this.calculateAge(this.birthday);
		if(age < 18){
			this.invalidBirthday = true;
			validator = false;
		}
		else {
			this.invalidBirthday = false;
		}

		//check lastName field
		if(this.lastName.length < 1){
			this.invalidLastName = true;
			validator = false;
		}
		else {
			this.invalidLastName = false;
		}

		//check firstName field
		if(this.firstName.length < 1){
			this.invalidFirstName = true;
			validator = false;
		}
		else {
			this.invalidFirstName = false;
		}

		return validator;
	}

	calculateAge(birthday: Date): number{
		let today: Date = new Date();
		let age = today.getFullYear() - birthday.getFullYear();
		let month = today.getMonth() - birthday.getMonth();
		if(month < 0 || (month === 0 && today.getDate() < birthday.getDate())){
			age--;
		}
		return age;
	}

	goToLogin() {
		this.router.navigate(['/login', { startingApp: this.startingApp }], { animated: true, transition: { name: 'slideRight', duration: 250 } });
	}

	goToApp() {
		this.userService.setShowLoginSignup(false);
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
