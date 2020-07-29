import { Component, OnInit, Input } from '@angular/core';
import { User } from '~/app/models/user.model';
import { ModalDatetimepicker } from 'nativescript-modal-datetimepicker';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { UserService } from '~/app/services/user.service';

@Component({
	selector: 'ns-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	@Input()
	welcome: string;

	infoTitle: string = "MES INFOS";
	addressTitle: string = "MES ADRESSES";

	@Input()
	user: User;

	civility: string;
	lastName: string;
	firstName: string;
	birthday: Date;
	birthdayShort: string;
	email: string;
	lastPassword: string;
	password: string;
	confirmPassword: string;

	invalidEmail: boolean;
	invalidLastPassword: boolean;
	invalidPassword: boolean;
	invalidConfirmPassword: boolean;
	invalidBirthday: boolean;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.civility = this.user.civility;
			this.lastName = this.user.lastName;
			this.firstName = this.user.firstName;
			this.birthday = this.user.birthday;
			this.shortDate(this.user.birthday);
			this.email = this.user.email;
			this.lastPassword = "";
			this.password = "";
			this.confirmPassword = "";
		}, 1);
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

	shortDate(date: Date) {
		let tempDate = new Date(date);

		let months = ["JANVIER", "FÉVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOÛT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DÉCEMBRE"];
		let day = tempDate.getDate();
		let month = months[tempDate.getMonth()];
		let year = tempDate.getFullYear();
		this.birthdayShort = day + " " + month + " " + year;
	}


	onUpdateUser() {
		if (this.checkFields()) {
			dialogs.confirm({
				title: "METTRE À JOUR LES INFOS",
				message: "Êtes-vous certain de vouloir modifier vos informations ?",
				okButtonText: "OUI",
				cancelButtonText: "NON",
				neutralButtonText: "ANNULER"
			}).then(result => {
				if (result) {
					let tempCivility = this.user.civility;
					let tempLastName = this.user.lastName;
					let tempFirstName = this.user.firstName;
					let tempBirthday = this.user.birthday;
					let tempEmail = this.user.email;
					let tempPassword = this.user.password;
					if(this.civility !== this.user.civility) {
						tempCivility = this.civility;
					}
					if(this.lastName !== this.user.lastName && this.lastName.length > 0){
						tempLastName = this.lastName;
					}
					if(this.firstName !== this.user.firstName && this.firstName.length > 0) {
						tempFirstName = this.firstName;
					}
					if(this.birthday !== this.user.birthday) {
						tempBirthday = this.birthday;
					}
					if(this.email !== this.user.email) {
						tempEmail = this.email;
					}
					if(this.password.length > 0) {
						tempPassword = this.password;
					}


					let tempUser = new User(tempCivility, tempFirstName, tempLastName, tempEmail, tempPassword, tempBirthday, this.user.addresses,
						this.user.phoneNumber, this.user.orders, this.user.frequentPurchases, this.user.loyaltyPoints, this.user.wishList);
					this.userService.updateUser(tempUser);
					this.lastPassword = "";
					this.password = "";
					this.confirmPassword = "";
				}
			});
		}
	}

	checkFields(): boolean {
		let validator: boolean = true;

		//check email field
		if (this.email !== this.user.email) {
			let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
			if (!regexEmail.test(this.email)) {
				this.invalidEmail = true;
				validator = false;
			}
			else {
				this.invalidEmail = false;
			}
		}
		else {
			this.invalidEmail = false;
		}


		// check password and confirmPassword fields
		if (this.lastPassword.length > 0 || this.password.length > 0 || this.confirmPassword.length > 0) {
			if(this.lastPassword !== this.user.password){
				this.invalidLastPassword = true;
				validator = false;
			}
			else {
				this.invalidLastPassword = false;
			}

			if(this.password === this.user.password) {
				this.invalidPassword = true;
				validator = false;
			}
			else {
				this.invalidPassword = false;
			}

			if (this.password !== this.confirmPassword) {
				this.invalidConfirmPassword = true;
				validator = false;
			}
			else {
				this.invalidConfirmPassword = false;
			}
		}
		else {
			this.invalidLastPassword = false;
			this.invalidPassword = false;
			this.invalidConfirmPassword = false;
		}

		//check birthday field
		if (this.birthday !== this.user.birthday) {
			let age = this.calculateAge(this.birthday);
			if (age < 18) {
				this.invalidBirthday = true;
				validator = false;
			}
			else {
				this.invalidBirthday = false;
			}
		}
		else {
			this.invalidBirthday = false;
		}

		return validator;
	}


	calculateAge(birthday: Date): number {
		let today: Date = new Date();
		let age = today.getFullYear() - birthday.getFullYear();
		let month = today.getMonth() - birthday.getMonth();
		if (month < 0 || (month === 0 && today.getDate() < birthday.getDate())) {
			age--;
		}
		return age;
	}
}
