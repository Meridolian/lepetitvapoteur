import { Component, OnInit, Input } from '@angular/core';
import { Address } from '~/app/models/user.model';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { CountryUtil } from '~/app/utils/country.util';

@Component({
	selector: 'ns-form-address',
	templateUrl: './form-address.component.html',
	styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit {

	@Input()
	type: string;

	@Input()
	address: Address;

	// section title
	title: string;

	// address
	label: string;
	lastName: string;
	firstName: string;
	fullAddress: string;
	postalCode: string;
	city: string;
	state: string;
	country: string;
	phoneNumber: string;
	default: boolean;

	// address complement
	society: string;
	staircase: string;
	doorCode1: string;
	building: string;
	doorCode2: string;
	intercom: string;
	secondPhoneNumber: string;
	instructions: string;

	showAdditionalAddress: boolean;
	additionalAddressButton: string = "AJOUTER UN COMPLÉMENT D'ADRESSE";

	constructor(private countryUtil: CountryUtil) { }

	ngOnInit(): void {
		if (this.type === "new") {
			this.title = "AJOUTER UNE ADRESSE";

			this.country = "Pays...";

			this.showAdditionalAddress = false;
		}
		else if (this.type === "edit") {
			// section title
			this.title = "MODIFIER CETTE ADRESSE";

			// address
			this.label = this.address.label;
			this.lastName = this.address.lastName;
			this.firstName = this.address.firstName;
			this.fullAddress = this.address.fullAddress;
			this.postalCode = this.address.postalCode;
			this.city = this.address.city;
			this.state = this.address.state;
			this.country = this.address.country;
			this.phoneNumber = this.address.phoneNumber;
			this.default = this.address.default;

			// address complement
			this.society = this.address.society;
			this.staircase = this.address.staircase;
			this.doorCode1 = this.address.doorCode1;
			this.building = this.address.building;
			this.doorCode2 = this.address.doorCode2;
			this.intercom = this.address.intercom;
			this.secondPhoneNumber = this.address.secondPhoneNumber;
			this.instructions = this.address.instructions;

			if (this.society !== null || this.staircase !== null || this.doorCode1 !== null || this.building !== null || this.doorCode2 !== null
				|| this.intercom !== null || this.secondPhoneNumber !== null || this.instructions !== null) {
					this.showAdditionalAddress = true;
			}
		}
	}

	onCountry() {
		dialogs.action({
			message: "Choisissez votre pays",
			cancelButtonText: "Annuler",
			actions: this.countryUtil.countries
		}).then(result => {
			if (result !== "Annuler") {
				this.country = result;
			}
		});
	}

	onAddAddress() {
		if (this.checkFields()) {

		}
	}

	checkFields(): boolean {
		let validator: boolean = true;

		return validator;
	}

	onShowAdditionalAddress() {
		this.showAdditionalAddress = !this.showAdditionalAddress;
	}

	onDefault() {
		this.default = !this.default;
	}
}
