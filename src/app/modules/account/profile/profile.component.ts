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

	title: string = "MES INFOS";

	@Input()
	user: User;

	civility: string;
	lastName: string;
	firstName: string;
	birthday: Date;
	birthdayShort: string;
	email: string;
	password: string;
	confirmPassword: string;

	/* invalidEmail: boolean;
	invalidPassword: boolean;
	invalidConfirmPassword: boolean; */

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.civility = this.user.civility;
			this.lastName = this.user.lastName;
			this.firstName = this.user.firstName;
			this.birthday = this.user.birthday;
			this.shortDate(this.user.birthday);
			this.email = this.user.email;
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
		// TODO check fields

		if (this.checkFields()) {
			dialogs.confirm({
				title: "METTRE À JOUR LES INFOS",
				message: "Êtes-vous certain de vouloir modifier vos informations ?",
				okButtonText: "OUI",
				cancelButtonText: "NON",
				neutralButtonText: "ANNULER"
			}).then(result => {
				if (result) {
					let tempUser = new User(this.civility, this.firstName, this.lastName, this.email, this.password, this.birthday, this.user.addresses,
						this.user.phoneNumber, this.user.orders, this.user.frequentPurchases, this.user.loyaltyPoints, this.user.wishList);
					this.userService.updateUser(tempUser);
					this.password = "";
					this.confirmPassword = "";
				}
			});
		}
	}

	checkFields() {
		/* let validator: boolean = true;

		if(this.password !== this.confirmPassword) {
			this.showErrorMessage = true;
			validator = false;
		}
		else {
			return true;
		} */

		return true;
	}

}
