import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '~/app/models/user.model';
import * as dialogs from "tns-core-modules/ui/dialogs";
import { CountryUtil } from '~/app/utils/country.util';
import { UserService } from '~/app/services/user.service';

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
	
	checked: boolean;

	showAdditionalAddress: boolean;
	additionalAddressButton: string = "AJOUTER UN COMPLÉMENT D'ADRESSE";

	@Output() hideForm = new EventEmitter();

	constructor(private countryUtil: CountryUtil, private userService: UserService) { }

	ngOnInit(): void {
		if (this.type === "new") {
			this.title = "AJOUTER UNE ADRESSE";

			this.address = new Address(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

			this.address.country = "Pays...";

			this.showAdditionalAddress = false;

			this.checked = false;
		}
		else if (this.type === "edit") {
			// section title
			this.title = "MODIFIER CETTE ADRESSE";

			this.checked = this.address.default;

			if (this.address.society !== null || this.address.staircase !== null || this.address.doorCode1 !== null ||
				this.address.building !== null || this.address.doorCode2 !== null || this.address.intercom !== null ||
				this.address.secondPhoneNumber !== null || this.address.instructions !== null) {
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
				this.address.country = result;
			}
		});
	}

	onSaveAddress() {
		if (this.checkFields()) {
			if (this.type === "new") {
				this.userService.addAddress(this.address);
				this.hideForm.emit(null);
			}
			else if (this.type === "edit") {
				this.userService.updateAddress(this.address, this.address.default);
				this.hideForm.emit(null);
			}
		}
	}

	checkFields(): boolean {
		let validator: boolean = true;

		// TODO

		return validator;
	}

	onShowAdditionalAddress() {
		this.showAdditionalAddress = !this.showAdditionalAddress;
	}

	onDefault() {
		this.address.default = !this.address.default;
	}
}
